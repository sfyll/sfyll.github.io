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

export default {
    components: {
        ContactMethods
    },
}
</script>