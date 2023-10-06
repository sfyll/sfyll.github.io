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
import { useMeta } from 'vue-meta'
import { marked } from 'marked'

export default {
    data() {
        return {
      postMeta: null,
      title: '',
      date: ''
    }
    },
    setup() {

    useMeta({
        title: 'The blog section of sfyl',
        htmlAttrs: { lang: 'en', amp: true },
        description: "sfyl blog, mostly about crypto and finance",
        og: {
            title: "The blog section of sfyl",
            description: "sfyl blog, mostly about crypto and finance",
            image:"https://www.sfyl.xyz/favicon.ico"
        },
    });
    },
    methods: {
        convertIsoDate(iso_date) {
            return format(parseISO(iso_date), 'PP p')
        },
    },
    created() {
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
    }
}
</script>
