<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full mb-4">
                <heading class="mb-2">
                    {{ title }}
                </heading>
                <span v-if="date" class="text-sm">(published {{ convertIsoDate(date) }})</span>
            </section>
        </div>
        <div ref="blogContent" class="md:mt-8 text-left">
        </div>
    </div>
</template>

<script>
import { parseISO, format } from 'date-fns'
import { marked } from 'marked'

export default {
    data() {
        return {
      title: '',
      date: '',
      metaData: null,
    }
    },
    setup() {
    },

    methods: {
        convertIsoDate(iso_date) {
            return format(parseISO(iso_date), 'PP p')
        },
        async fetchMetaData(slug) {
            try {
                const response = await fetch('/blog_post/meta_data.json');
                const data = await response.json();
                const meta = data.find(post => post.slug === slug);
                this.metaData = meta;

                this.updateMeta(meta, slug);  // Call updateMeta after fetching the metadata
            } catch (error) {
                console.error("Error fetching post metadata:", error);
            }
        },
        updateMeta(meta, slug) {  // Method to update the meta tags
      document.title = meta.title;
      
      this.setMetaTag('name', 'description', meta.summary);
      this.setMetaTag('property', 'og:title', meta.title);
      this.setMetaTag('property', 'og:description', meta.summary);
      this.setMetaTag('property', 'og:image', `https://www.sfyl.xyz/blog_post/${slug}/${meta.featured_image}`);
      this.setMetaTag('name', 'twitter:card', 'summary');
      this.setMetaTag('name', 'twitter:site', '@SFYLL');
      this.setMetaTag('name', 'theme-color', this.$store.state.dark ? "#2e3440" : "#eceff4");
    },
    setMetaTag(type, key, content) {  // Helper method to set a meta tag
        let metaTag = document.head.querySelector(`meta[${type}="${key}"]`);
        
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute(type, key);
            document.head.appendChild(metaTag);
        }
        
        metaTag.setAttribute('content', content);
        metaTag.setAttribute('content-controlled', 'true');  // Add custom attribute
    },

    removeMetaTags() {  // Method to remove the meta tags
      const metaTags = document.head.querySelectorAll('meta[content-controlled="true"]');
      metaTags.forEach(tag => document.head.removeChild(tag));
    },
    },
    created() {
        this.fetchMetaData(this.$route.params.post);
        fetch(`/blog_post/${this.$route.params.post}/index.md`)  // Assume markdown file extension
            .then(response => response.text())
            .then(markdown => {
                const html = marked(markdown);  // Convert markdown to HTML
                // Extract title and date from HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                this.title = doc.getElementById('post-title').textContent;
                this.date = doc.getElementById('post-date').textContent;

                // Inject content
                this.$refs.blogContent.innerHTML = doc.getElementById('blogContent').innerHTML;
            })
            .catch(error => {
                console.error("Error fetching post:", error);
            });
    },
    beforeRouteLeave(to, from, next) {
    this.removeMetaTags();  // Remove the meta tags when navigating away
    next();
  }
}
</script>
