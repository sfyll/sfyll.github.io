<template>
    <div>
        <div class="md:flex md:mt-16">
            <section class="md:w-full md:max-h-screen mb-4">
                <heading class="mb-2">
                    Get in touch:
                </heading>
                <ContactMethods class="mb-6"/>
            </section>
        </div>
    </div>
</template>

<script>
import ContactMethods from '../components/ContactMethods'
import { useMeta } from 'vue-meta'

export default {
    components: {
        ContactMethods
    },
    setup () {
        useMeta({
        title: 'The contact section of sfyl',
        htmlAttrs: { lang: 'en', amp: true },
        description: "If you want to talk, contact sfyl",
        og: {
            title: "The contact section of sfyl",
            description: "If you want to talk, contact sfyl",
            image:"https://www.sfyl.xyz/favicon.ico"
        },
        })
    }
}

</script>