<template>
    <body>
        <div id="app" class="max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10">
            <div v-if="!isMobile" class="relative mb-8 rounded-b-lg" id="nav">
                <header class="flex items-center flex-wrap justify-between">
                    <div class="mr-6">
                        <h3 class="text-2xl">
                            <a class="flex items-center logo">
                                <span class="rainbow"><router-link to="/">sfyl</router-link></span>
                            </a>
                        </h3>
                    </div>
                    <ul id="navButtons" class="align-baseline sm:block flex-wrap md:flex md:items-center flex-grow px-2 md:p-0 hidden md:bg-transparent justify-center">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about"><span class="no-wrap">About Me</span></router-link></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                    <div id="icons" class="md:text-right flex items-center md:justify-end">
                        <ThemeSwitcher/>
                        <a href="https://github.com/SFYLL/sfyll.github.io" title="View this website's source on GitHub">
                            <Unicon width="24" height="24" name="github" :fill="iconColor"/>
                        </a>
                    </div>
                </header>
            </div>
            <div v-else class="flex items-center flex-wrap justify-between">
                <!-- Mobile Menu Button -->
                <div>
                    <button class="flex items-center px-3 py-3 text-gray-700 hover:text-gray-900" title="Menu" v-on:click="mobileMenu">
                        <Unicon width="20" height="20" name="bars" :fill="iconColor"/>
                    </button>
                </div> 
                <!-- Logo -->
                <div class="flex-1 text-center flex justify-center">
                    <h3 class="text-2xl">
                        <a class="flex items-center justify-center logo">
                            <span  @click="toggleMenu" class="rainbow"><router-link to="/">sfyl</router-link></span>
                        </a>
                    </h3>
                </div>
                <!-- Icons -->
                <div>
                    <ThemeSwitcher/>
                    <a href="https://github.com/SFYLL/sfyll.github.io" title="View this website's source on GitHub">
                        <Unicon width="24" height="24" name="github" :fill="iconColor"/>
                    </a>
                </div>
            </div>

            <!-- Mobile Navigation appearing below the header when clicked -->
            <div v-if="isMobile && showMobileNav" class="flex flex-col items-center w-full mt-4" id="nav">
                <ul id="mobileNavButtons" class="flex flex-col items-center w-full">
                    <li @click="toggleMenu"><router-link to="/">Home</router-link></li>
                    <li @click="toggleMenu"><router-link to="/about"><span class="no-wrap">About Me</span></router-link></li>
                    <li @click="toggleMenu"><router-link to="/blog">Blog</router-link></li>
                    <li @click="toggleMenu"><router-link to="/contact">Contact</router-link></li>
                </ul>
            </div>
            <router-view/>
        </div>
    </body>
</template>

<style scoped>
    .logo {
        user-select: none;
    }

    #nav {
        position: sticky;
        top: 0;
        backdrop-filter: blur(5px);
        z-index: 77727; /* fuck you youtube */
    }

    #nav a:link {
        text-decoration: none;
    }

    #nav li {
        display: inline;
    }
</style>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default {
    components: {
        ThemeSwitcher,
    },
    data() {
        return {
            isMobile: window.innerWidth <= 768, // Assuming 768px is your mobile breakpoint
        };
    },
    computed: {
        iconColor: function() {
            return this.$store.state.dark ? "white" : "black"
        },
        showMobileNav: {
        get() {
            return this.$store.state.showMobileNav;
        },
        set(value) {
            this.$store.commit('toggleMobileNav', value);
        },
    },
    },
    methods: {
        mobileMenu: function() {
        this.$store.commit('toggleMobileNav', !this.$store.state.showMobileNav);
        },
        toggleMenu: function() {
            this.$store.commit('toggleMobileNav', false);
        },
    },
    mounted() {
        document.body.classList.add((this.$store.state.dark ? 'dark' : 'light'))
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWindowSize);
    }
}
</script>

<style>
@import "./assets/theming.css";

#app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav li {
    padding-right: 15px;
}

#nav a {
    font-weight: bold;
    padding: 5px;
}
</style>
