<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full mb-4">
                <heading class="mb-2">
                    {{ post.data.title }}
                </heading>
                <span v-if="post && post.data && post.data.published" class="text-sm">(published {{ convertIsoDate(post.data.published) }})</span>
            </section>
        </div>
        <div class="md:mt-8 text-left">
            <div v-html="post.data.body"/>
        </div>
    </div>
</template>

<script>
import { parseISO, format } from 'date-fns'
import { useMeta } from 'vue-meta'

export default {
    data() {
        return {
            post: { data: {} },
        }
    },
    setup () {
        useMeta({
        title: 'The blog section of sfyl',
        htmlAttrs: { lang: 'en', amp: true },
        description: "sfyl's blog, mostly about crypto and finance",
        og: {
            title: "The blog section of sfyl",
            description: "sfyl's blog, mostly about crypto and finance",
            image:"https://www.sfyl.xyz/favicon.ico"
        },
        })
    },
    methods: {
        convertIsoDate(iso_date) {
            return format(parseISO(iso_date), 'PP p')
        },
    },

    created() {
        this.$cms.post.retrieve(this.$route.params.post).then(res => {
            this.post = res.data;
        }).catch(error => {
            console.error("Error fetching post:", error); 
        })
    }
}
</script>