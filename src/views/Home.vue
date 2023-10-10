<template>
    <div class="home">
        <div class="md:flex md:mt-16 mb-8 items-center justify-between">
            <section class="md:w-full mt-1">
                <a class="content-center">
                    <img src="../assets/luff1.png" title="Luffy" class="content-center mx-auto h-48 w-48 transparent-img transparent-img-light">
                </a>
            </section>
        </div>
        <div class="md:flex md:mt-8 mb-24 items-center justify-between">
            <section class="md:w-full mt-1">
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

<style scoped>
.dark .transparent-img {
    background-color: transparent;
    border-radius: 0;
}

.light .transparent-img-light {
    background-color: transparent;
    border-radius: 0;
}
</style>


<script>
import { useMeta } from 'vue-meta'


export default {
    name: 'Home',
    components: {
    },
    setup () {
        useMeta({
        htmlAttrs: { lang: 'en', amp: true },
        title: 'The personal website of sfyl',
        description: "High frequency trader turned byte generalist",
        og: {
            title: 'The personal website of sfyl',
            description: 'High frequency trader turned byte generalist',
            image:"https://www.sfyl.xyz/favicon.ico"
        },
        twitter: {
            card: "summary",
            site: "@SFYLL"
        }
      })
        
    },
    methods: {
        toggleMenu: function() {
            this.$store.commit('toggleMobileNav', false);
        }
    }
}
</script>
