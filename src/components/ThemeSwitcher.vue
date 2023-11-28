<template>
    <span @click="switchTheme" class="switcher align-baseline" tabindex="0">
        <unicon :name="themeIcon" :fill="themeIconColor" :aria-label="`Switch to ${themeLabel} mode`"/>
    </span>
</template>

<script>
export default {
    computed: {
        themeIcon() {
            return this.$store.state.dark ? 'sun' : 'moon';
        },
        themeIconColor() {
            return this.$store.state.dark ? 'white' : 'black';
        },
        themeLabel() {
            return this.$store.state.dark ? 'light' : 'dark';
        }
    },
    methods: {
        switchTheme() {
            this.$store.commit('switchTheme');
        }
    }
}
</script>

