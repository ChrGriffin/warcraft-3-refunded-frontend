<template>
    <header>
        <div class="header-content">
            <div>
                <h1><img :src="require('@/assets/images/logo.png')" alt="Warcraft 3 Refucked Logo"/></h1>
                <h2><span>A broken, dishonest, anti-consumer,</span><span>glorified remaster</span></h2>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class HeroHeader extends Vue {
    }
</script>

<style scoped lang="scss">
    .header-content {
        text-shadow: black 0 3px, black 0 0 50px;
        display: flex;
        align-content: center;
        justify-content: center;
        background-image: url("./../assets/images/background1.jpg");
        background-size: cover;
        background-position: center center;
        min-height: 90vh;

        div {
            align-self: center;
        }

        h1 {
            text-align: center;

            img {
                display: inline-block;
            }
        }

        h2 {
            font-size: 2rem;
            line-height: 1.2;
            letter-spacing: 0.2rem;
            margin-top: 0.75rem;

            span {
                display: block;
            }

            span:nth-child(2) {
                font-size: 2.8rem;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .header-content {
            min-height: 0;
            padding: 1rem 0 2rem;
        }
    }
</style>
