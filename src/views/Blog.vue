<template>
    <div>
        <div class="md:mt-16">
            <heading class="mb-2">Posts</heading>
            <section class="md:w-full sm:flex md:grid md:grid-flow-cols md:grid-cols-3">
                <Card :href="`/blog/${post.slug}`" left v-for="(post, index) in posts" class="mr-2" :key="`${post.slug}_${index}`">
                    <heading small class="concatenation">{{ post.title }}</heading>
                    <subheading small>{{ post.summary }}</subheading>
                    <span class="float-right text-xs pt-2">{{ convertIsoDate(post.created) }}</span>
                </Card>
            </section>
        </div>
        <span>
            <br/>
            <Unicon name="arrow-left" width="24" height="24" :fill="iconColor" v-if="meta && 'previous_page' in meta && meta.previous_page !== null"/>
            <span class="px-2">Page {{ currentPage }}</span>
            <Unicon name="arrow-right" width="24" height="24" :fill="iconColor" v-if="meta && 'next_page' in meta && meta.next_page !== null"/>
        </span>
    </div>
</template>
<style scoped>
    .md\:min-h-80 {
        min-height: 320px;
    }
    .concatenation {
        -ms-word-break: break-all;
        word-break: break-all;

        /* Non standard for webkit */
        word-break: break-word;

        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;

        max-width: 98%;
    }
    
</style>
<script>
import Card from '../components/Card'
import { format, parse } from 'date-fns'
import { useMeta } from 'vue-meta'

export default {
    data() {
        return {
            posts: [],
            currentPage: 1,
            meta: null
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
        twitter: {
            card: "summary",
            site: "@SFYLL"
        }
        })
    },
    methods: {
    async listPosts(page) {
        fetch('blog_post/meta_data.json')
                .then(response => response.json())
                .then(data => {
                    const postsPerPage = 15;
                    const totalPosts = data.length;
                    const totalPages = Math.ceil(totalPosts / postsPerPage);
                    const startIndex = (page - 1) * postsPerPage;
                    const endIndex = startIndex + postsPerPage;

                    this.posts = data.slice(startIndex, endIndex);
                    this.meta = {
                        count: totalPosts,
                        next_page: page < totalPages ? page + 1 : null,
                        previous_page: page > 1 ? page - 1 : null
                    };
                })
                .catch(error => {
                    console.error("Error fetching posts metadata:", error);
                });
    },
    convertIsoDate(iso_date) {
        const parsedDate = parse(iso_date, 'yyyy-MM-dd', new Date());
        return format(parsedDate, 'P');
    }
},
    components: {
        Card
    },
    computed: {
        iconColor: function() {
            return this.$store.state.dark ? "white" : "black"
        }
    },
    created() {
        this.listPosts(this.currentPage)
    }

}
</script>