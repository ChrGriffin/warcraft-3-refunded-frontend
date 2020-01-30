<template>
    <header>
        <div>
            <h1><img :src="require('@/assets/images/logo.png')" alt="Warcraft 3 Refucked Logo"/></h1>
            <h2><span>A buggy, broken, dishonest, anti-consumer,</span><span>glorified remaster.</span></h2>
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
    @import "./../assets/scss/variables";

    header {
        color: $white;
        text-shadow: black 0 3px, black 0 0 50px;
        height: 90vh;
        display: flex;
        align-content: center;
        justify-content: center;
        background-image: url("https://bnetcmsus-a.akamaihd.net/cms/template_resource/ed/ED7WF47Q19421579634270750.jpg");
        background-size: cover;
        background-position: center center;

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
</style>
