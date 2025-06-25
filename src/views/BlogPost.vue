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
        <div ref="blogContent" class="blog-content md:mt-8 text-left">
        </div>
    </div>
</template>

<script>
import { parseISO, format } from 'date-fns'
import { marked } from 'marked'
import fm from 'front-matter'
import katex from 'katex' 
import 'katex/dist/katex.min.css'

export default {
    data() {
        return {
            title: '',
            date: '',
        }
    },
    methods: {
        convertIsoDate(iso_date) {
            if (!iso_date) return '';
            return format(parseISO(iso_date), 'PP p');
        },
        async fetchAndRenderPost(slug) {
        try {
                const response = await fetch(`/blog_post/${slug}/index.md`);
                if (!response.ok) throw new Error('Post not found');
                const markdownWithFrontmatter = await response.text();

                const { attributes, body } = fm(markdownWithFrontmatter);

                this.title = attributes.title;
                this.date = attributes.date;
                
                this.updateMeta(attributes, slug);

                // 1. First, find all $$...$$ blocks and render them to HTML using KaTeX
                const bodyWithRenderedMath = body.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
                    try {
                        // renderToString converts the LaTeX into an HTML string
                        return katex.renderToString(latex, {
                            displayMode: true,
                            throwOnError: false
                        });
                    } catch (e) {
                        console.error("KaTeX renderToString error:", e);
                        return `<p class="katex-error">${e.message}</p>`;
                    }
                });

                // 2. NOW, run marked() on the content that already has HTML math
                const htmlContent = marked(bodyWithRenderedMath);
                
                // 3. Inject the final, fully-processed HTML
                this.$refs.blogContent.innerHTML = htmlContent;

            } catch (error) {
                console.error("Error fetching or rendering post:", error);
            }
        },
        updateMeta(meta, slug) {
            document.title = meta.title;
    
            this.setMetaTag('name', 'description', meta.summary || '');
            this.setMetaTag('property', 'og:title', meta.title);
            this.setMetaTag('property', 'og:description', meta.summary || '');
            if (meta.featured_image) {
                this.setMetaTag('property', 'og:image', `https://www.sfyl.xyz/blog_post/${slug}/${meta.featured_image}`);
                this.setMetaTag('name', 'twitter:image', `https://www.sfyl.xyz/blog_post/${slug}/${meta.featured_image}`);
            }
            this.setMetaTag('property', 'og:url', `https://www.sfyl.xyz/blog/${slug}/`);
            this.setMetaTag('name', 'twitter:card', 'summary_large_image');
            this.setMetaTag('name', 'twitter:site', '@SFYLL');
            this.setMetaTag('name', 'theme-color', this.$store.state.dark ? "#2e3440" : "#eceff4");
        },
        setMetaTag(type, key, content) {
            let metaTag = document.head.querySelector(`meta[${type}="${key}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute(type, key);
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
            metaTag.setAttribute('content-controlled', 'true');
        },
        removeMetaTags() {
            const metaTags = document.head.querySelectorAll('meta[content-controlled="true"]');
            metaTags.forEach(tag => {
                if (tag.getAttribute('name') !== 'theme-color') {
                    document.head.removeChild(tag);
                }
            })
        },
    },
    created() {
        this.fetchAndRenderPost(this.$route.params.post);
    },
    beforeRouteLeave(to, from, next) {
        this.removeMetaTags();
        next();
    }
}
</script>
