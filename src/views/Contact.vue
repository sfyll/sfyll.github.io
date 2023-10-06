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
        title: 'Get in touch',
        htmlAttrs: { lang: 'en', amp: true },
        description: "Get sfyl's contact",
        og: {
            title: "Get in touch",
            description: "Get sfyl's contact",
            image:"https://www.sfyl.xyz/transponder_snail.jpg"
        },
        })
    }
}

</script>