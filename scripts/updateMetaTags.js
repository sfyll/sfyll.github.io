const path = require('path');
const fs = require('fs-extra');
const { JSDOM } = require('jsdom');
const fm = require('front-matter'); // Use the same front-matter library

// Define paths
// This assumes your source markdown files are in `public/blog_post`
// so they get copied to `dist/blog_post` during the build process.
// Adjust if your source folder is different (e.g., `src/posts`).
const postsSourceDir = path.resolve(__dirname, '../public/blog_post');
const builtBlogDir = path.resolve(__dirname, '../dist/blog');

async function updateMetaTags() {
    // Get all post slugs by reading the directory names from the source
    const postSlugs = await fs.readdir(postsSourceDir);
    console.log(`Found ${postSlugs.length} posts. Injecting meta tags...`);

    for (const slug of postSlugs) {
        const markdownFilePath = path.join(postsSourceDir, slug, 'index.md');
        const htmlFilePath = path.join(builtBlogDir, slug, 'index.html');

        // Check if both the source MD and final HTML file exist
        if (fs.existsSync(markdownFilePath) && fs.existsSync(htmlFilePath)) {
            try {
                // 1. Read the markdown file and parse its frontmatter
                const mdContent = await fs.readFile(markdownFilePath, 'utf-8');
                const { attributes: post } = fm(mdContent); // 'post' now holds our metadata

                // 2. Read the corresponding built HTML file
                let htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
                const dom = new JSDOM(htmlContent);
                const document = dom.window.document;
                const head = document.querySelector('head');

                if (!head) continue; // Skip if no <head> tag

                // 3. Define and inject the meta tags
                const metaInfo = [
                    { name: 'description', content: post.summary },
                    { property: 'og:title', content: post.title },
                    { property: 'og:description', content: post.summary },
                    { property: 'og:image', content: `https://www.sfyl.xyz/blog_post/${slug}/${post.featured_image}` },
                    { property: 'og:url', content: `https://www.sfyl.xyz/blog/${slug}/` },
                    { name: 'twitter:image', content: `https://www.sfyl.xyz/blog_post/${slug}/${post.featured_image}` },
                    { name: 'twitter:card', content: "summary_large_image" }, // summary_large_image is often preferred over summary
                    { name: 'twitter:site', content: "@SFYLL" },
                ];

                for (const meta of metaInfo) {
                    // This logic correctly creates a new tag if it doesn't exist.
                    const selector = meta.name ? `meta[name="${meta.name}"]` : `meta[property="${meta.property}"]`;
                    if (!head.querySelector(selector)) {
                        const newMeta = document.createElement('meta');
                        if (meta.name) newMeta.setAttribute('name', meta.name);
                        if (meta.property) newMeta.setAttribute('property', meta.property);
                        newMeta.setAttribute('content', meta.content);
                        head.appendChild(newMeta);
                    }
                }

                // 4. Write the updated HTML back to the file
                await fs.writeFile(htmlFilePath, dom.serialize());
                console.log(`  - Successfully updated meta for: ${slug}`);

            } catch (error) {
                console.error(`  - Failed to update meta for ${slug}:`, error);
            }
        }
    }
}

// Execute the function
updateMetaTags().catch(console.error);
