<template>
    <div id="app">
        <site-navigation/>
        <router-view />
        <site-footer />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteNavigation from './components/SiteNavigation.vue';
    import SiteFooter from '@/components/SiteFooter.vue';

    @Component({
        components: {SiteFooter, SiteNavigation },
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "~modern-css-reset";
    @import "./assets/scss/variables";

    @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
    @font-face {
        font-family: 'BlizzWeb';
        src: url('assets/fonts/Blizz.woff2') format('woff2'),
             url('assets/fonts/Blizz.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: black;
        color: $white;
        font-family: 'Lato', sans-serif;
    }

    header, section {
        padding-bottom: 22px;
        position: relative;
        overflow: hidden;

        &:after {
            display: block;
            content: "";
            height: 26px;
            width: 100%;
            background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/border_zrbt7d.png");
            background-size: contain;
            position: absolute;
            bottom: -4px;
            left: 0;
        }
    }

    .grid {
        display: flex;
    }

    section {
        padding: 3rem 2rem calc(3rem + 26px);
    }

    footer {
        padding: 3rem 2rem;
    }

    .divider {
        height: 30px;
        background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/divider_uyhbek.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    h1, h2, h4 {
        font-family: 'BlizzWeb', serif;
        text-transform: uppercase;
    }

    h3 {
        color: $gold;
        text-transform: uppercase;
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
    }

    h4 {
        font-size: 3rem;
        letter-spacing: 0.1rem;
    }

    p, ul, blockquote {
        max-width: 750px;
        margin: 0 auto;
    }

    p.large, ul.large {
        font-size: 1.5rem;
        color: $offwhite;
        font-weight: bold;
        line-height: 1.3;
        margin: 0 auto 1rem;
    }

    ul.large {
        list-style: disc;
        padding-left: 2rem;

        li {
            padding-bottom: 1rem;
        }
    }

    blockquote {
        margin: 0 auto 2rem;
        font-size: 1.1rem;
        font-style: italic;
        text-align: left;
        border: 2px solid $darkgrey;
        padding: 1rem;
    }
</style>
