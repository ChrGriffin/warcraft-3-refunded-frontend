<template>
    <div id="app">
        <site-navigation/>
        <router-view />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteNavigation from './components/SiteNavigation.vue';

    @Component({
        components: { SiteNavigation },
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "~modern-css-reset";

    @font-face {
        font-family: 'BlizzWeb';
        src: url('assets/fonts/Blizz.woff2') format('woff2'),
             url('assets/fonts/Blizz.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: black;
        min-height: 100vh;
    }

    h1, h2, h3 {
        font-family: 'BlizzWeb', serif;
        text-transform: uppercase;
    }
</style>
