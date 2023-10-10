const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const path = require('path');
const PrerenderPlugin = require('prerender-spa-plugin-next');

const plugins = [];
if (process.env.NODE_ENV === 'production') {
  const metaData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'public/blog_post/meta_data.json'), 'utf-8'));
  const postRoutes = metaData.map(post => `/blog/${post.slug}`);

  const staticRoutes = ['/', '/home', '/about', '/contact', '/blog'];

  const prerenderRoutes = staticRoutes.concat(postRoutes);

  plugins.unshift(
    new PrerenderPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: prerenderRoutes, 
    })
  );
}

plugins.unshift(
  new CopyWebpackPlugin({
    patterns: [{ from: 'CNAME', to: 'CNAME', toType:"file" }]
  })
)

module.exports = {
    transpileDependencies: true,
    configureWebpack(config) {
        config.plugins = [...config.plugins, ...plugins];
    },
  }


