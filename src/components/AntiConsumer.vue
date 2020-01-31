<template>
    <section>
        <h3>Unethical & Immoral</h3>
        <h4>Anti-Consumer Practices</h4>
        <div class="divider"></div>
        <p class="large">If it's the same game, you may as well just not purchase Reforged, or refund your preorder, and play the original Warcraft 3, right?</p>
        <div class="grid">
            <div class="item">
                <h5>No Refunds</h5>
                <p>Have you spent some time waiting in a multiplayer lobby? Tried out the campaign? Launched the game, ever? Sucks to be you, then. Blizzard is denying an enormous amount of refund requests, sometimes in direct contravention of local law, on the basis that the customer has already 'played too much'.</p>
            </div>

            <div class="item">
                <h5>Reforged Only</h5>
                <p>Did you purchase Warcraft 3 on Battle.net? Did you expect to be able to play it in the future? Well, you can't, whether you bought it or not. Launching the Battle.net version of Warcraft 3 now sends you to the Reforged launcher. Blizzard is happy to keep the money you paid for Warcraft 3, though.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class AntiConsumer extends Vue {
    }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/variables";

    section {
        background-image: url("https://bnetcmsus-a.akamaihd.net/cms/template_resource/COAVLK6JC8PF1541005874981.jpg");
        background-size: cover;
        background-position: center center;
    }

    p.large {
        margin-bottom: 3rem;
    }

    .grid {
        justify-content: space-between;
        max-width: 1024px;
        margin: 0 auto;

        .item {
            border: 2px solid rgb(100, 100, 100);
            background-image: url("https://bnetcmsus-a.akamaihd.net/cms/template_resource/L6EBVPLILUWT1541005857461.jpg");
            background-position: bottom center;
            width: 48.5%;
            padding: 1em;

            h5 {
                font-size: 1.4rem;
                letter-spacing: 0;
                margin: 0 0 1rem 0;
            }

            p {
                text-align: left;
                font-size: 1.2rem;
            }
        }
    }
</style>
