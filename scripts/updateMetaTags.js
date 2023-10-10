const path = require('path');
const fs = require('fs-extra');
const {JSDOM}  = require('jsdom');


async function updateMetaTags() {
const blogFolderPath = path.resolve(__dirname, '../dist/blog');
const metaDataPath = path.resolve(__dirname, '../dist/blog_post/meta_data.json');

// Read JSON data
const metaData = await fs.readJSON(metaDataPath);

// Loop through each blog post metadata
for (const post of metaData) {
const htmlFilePath = path.join(blogFolderPath, `${post.slug}/index.html`);

// Check if HTML file exists
if (fs.existsSync(htmlFilePath)) {
    let htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const head = document.querySelector('head');

    const metaInfo = [
    { name: 'description', content: post.summary },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.summary },
    { property: 'og:image', content: `https://www.sfyl.xyz/blog_post/${post.slug}/${post.featured_image}` },
    { name: 'twitter:card', content: "summary"},
    { name: 'twitter:site', content: "@SFYLL"},
    ];

    for (const meta of metaInfo) {
    let existingMeta;
    if (meta.name) {
        existingMeta = head.querySelector(`meta[name="${meta.name}"]`);
    } else if (meta.property) {
        existingMeta = head.querySelector(`meta[property="${meta.property}"]`);
    }

    if (!existingMeta) {
        const newMeta = document.createElement('meta');
        if (meta.name) newMeta.setAttribute('name', meta.name);
        if (meta.property) newMeta.setAttribute('property', meta.property);
        newMeta.setAttribute('content', meta.content);
        head.appendChild(newMeta);
    }
    }

    // Update HTML content
    htmlContent = dom.serialize();

    // Write updated HTML back to file
    await fs.writeFile(htmlFilePath, htmlContent);
    }
}
}

// Execute the function
updateMetaTags().catch(console.error);