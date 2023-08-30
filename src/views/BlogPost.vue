<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full mb-4">
                <heading class="mb-2">
                    {{ post.data.title }}
                </heading>
                <br/><span v-if="post.data.published" class="text-sm">(published {{ convertIsoDate(post.data.published) }})</span>
            </section>
        </div>
        <div class="md:mt-8 text-left">
            <div v-html="post.data.body"/>
        </div>
    </div>
</template>

<script>
import { parseISO, format } from 'date-fns'

export default {
    data() {
        return {
            post: {},
        }
    },
    methods: {
        convertIsoDate(iso_date) {
            return format(parseISO(iso_date), 'PP p')
        }
    },
    created() {
        this.$cms.post.retrieve(this.$route.params.post).then(res => {
            this.post = res.data
        }).catch(res => {
            console.log(res) // will figure out actual error handling later!
        })
    }
}
</script>