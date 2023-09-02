<template>
    <div class="home">
        <div class="md:flex md:mt-16 mb-8 items-center justify-between">
            <section class="md:w-full mt-1">
                <a class="content-center">
                    <img src="../assets/cousin_skeeter_transparant.jpeg" title="Art from peakpx" class="rounded-full content-center mx-auto h-48 w-48">
                </a>
            </section>
        </div>
        <div class="md:flex md:mt-8 mb-24 items-center justify-between">
            <section class="md:w-full">
                <heading>
                    Hey, I am <span class="rainbow">sfyl</span>
                </heading>
                <body class="mb-0">
                    High frequency trader turned byte generalist.<br/>
                    Curious? Try the <span @click="toggleMenu" class="no-wrap"><router-link to="/about">About</router-link> page</span>,
                    or check my <span @click="toggleMenu"><router-link to="/blog">Blog</router-link></span>.<br/>
                    Building? Get my <span @click="toggleMenu"><router-link to="/Contact">Contact</router-link></span> and reach out!
                </body>
            </section>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    },
    methods: {
        toggleMenu: function() {
            this.$store.commit('toggleMobileNav', false);
        }
    }
}
</script>
