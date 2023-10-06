<template>
    <body>
        <metainfo>
            <template v-slot:title="{ content }">{{ content }}</template>
        </metainfo>
        <meta name="twitter:site" content="@SFYLL">
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
                    <ul id="navButtons"
                        class="align-baseline flex-wrap md:flex md:items-center flex-grow px-2 md:p-0 hidden md:bg-transparent justify-center">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about"><span class="no-wrap">About Me</span></router-link></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                    <div id="icons" class="md:text-right flex items-center md:justify-end">
                        <ThemeSwitcher />
                        <a href="https://github.com/SFYLL/sfyll.github.io" title="View this website's source on GitHub">
                            <Unicon width="24" height="24" name="github" :fill="iconColor" />
                        </a>
                    </div>
                </header>
            </div>
            <div v-else class="flex items-center flex-wrap justify-between">
                <!-- Mobile Menu Button -->
                <div>
                    <button id="menuIcon" class="flex items-center px-3 py-3 text-gray-700 hover:text-gray-900" title="Menu"
                        v-on:click="mobileMenu">
                        <Unicon width="20" height="20" name="bars" :fill="iconColor" />
                    </button>
                </div>
                <!-- Logo -->
                <div class="flex-1 text-center flex justify-center">
                    <h3 class="text-2xl">
                        <a class="flex items-center justify-center logo">
                            <span @click="toggleMenu" class="rainbow"><router-link to="/">sfyl</router-link></span>
                        </a>
                    </h3>
                </div>
                <!-- Icons -->
                <div>
                    <ThemeSwitcher />
                    <a href="https://github.com/SFYLL/sfyll.github.io" title="View this website's source on GitHub">
                        <Unicon width="24" height="24" name="github" :fill="iconColor" />
                    </a>
                </div>
            </div>

            <!-- Mobile Navigation appearing below the header when clicked -->
            <Transition name="appear">
                <div v-if="isMobile && showMobileNav" id="mobilenav" class="flex flex-col items-center h-full">
                    <ul id="mobilenavbuttons" class="flex flex-col items-center w-full">
                        <li @click="toggleMenu"><router-link to="/">Home</router-link></li>
                        <li @click="toggleMenu"><router-link to="/about"><span class="no-wrap">About Me</span></router-link>
                        </li>
                        <li @click="toggleMenu"><router-link to="/blog">Blog</router-link></li>
                        <li @click="toggleMenu"><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </div>
            </Transition>
            <router-view />
        </div>
    </body>
</template>

<style scoped>
.logo {
    user-select: none;
}

/* for below scss @mixing would be cleaner */
#nav {
    position: sticky;
    top: 0;
    backdrop-filter: blur(5px);
    z-index: 77727
}

#nav a:link {
    text-decoration: none;
}

#nav li {
    display: inline;
}

#mobilenav {
    will-change: transform;
    left: 0;
    width: 60%;
    z-index: 999;
    display: block;
    position: absolute;
    backdrop-filter: blur(5px);
}

#mobilenav a:link {
    text-decoration: none;
}

#mobilenav li {
    display: inline;
}

#mobilenavbuttons li {
    margin: 15px 0;
}

.dark #mobilenavbuttons li {
    color: var(--dark-text);
}

.dark #mobilenav {
    background-color: rgba(46,52,64, 0.9);
}

.light #mobilenav {
    background-color: rgba(236, 239, 244, 0.669);
}

</style>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useMeta } from 'vue-meta'

export default {
    components: {
        ThemeSwitcher,
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
            card: "summary"
        }
      })
        
    },
    data() {
        return {
            isMobile: window.innerWidth <= 768, // Assuming 768px is your mobile breakpoint
        };
    },
    computed: {
        iconColor: function () {
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
        mobileMenu: function () {
            this.$store.commit('toggleMobileNav', !this.$store.state.showMobileNav);
        },
        toggleMenu: function () {
            this.$store.commit('toggleMobileNav', false);
        },
    },
    mounted() {
        const metaThemeColor = document.createElement('meta');
        metaThemeColor.name = "theme-color";
        metaThemeColor.content = this.$store.state.dark ? "#2e3440" : "#eceff4";
        document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
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

#menuIcon {
    outline: none;
}

.slide {
    display: block;
    -webkit-animation: slide-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.appear-enter-active {
  animation: appear 0.5s;
}
.appear-leave-active {
  animation: appear 0.5s reverse;
}
@keyframes appear {
  0% {
    transform: translateX(-250px);
  }
}

</style>
