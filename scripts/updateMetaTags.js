const path = require('path');
const fs = require('fs-extra');

async function updateMetaTags() {
  const blogFolderPath = path.resolve(__dirname, '../dist/blog');
  const metaDataPath = path.resolve(__dirname, '../dist/blog_post/meta_data.json');

  // Read JSON data
  const metaData = await fs.readJSON(metaDataPath);

  // Loop through each blog post metadata
  for (const post of metaData) {
    const htmlFilePath = path.join(blogFolderPath, `${post.slug}/index.html`);
    console.log(htmlFilePath)

    
    // Check if HTML file exists
    if (fs.existsSync(htmlFilePath)) {
      let htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
      
      const metaTags = `<meta name="description" content="${post.summary}"><meta property="og:title" content="${post.title}"><meta property="og:description" content="${post.summary}"><meta property="og:image" content="/blog_post/${post.slug}/${post.featured_image}">`;

      htmlContent = htmlContent.replace('</head>', `${metaTags}</head>`);
      
      // Write updated HTML back to file
      await fs.writeFile(htmlFilePath, htmlContent);
    }
  }
}

// Execute the function
updateMetaTags().catch(console.error);