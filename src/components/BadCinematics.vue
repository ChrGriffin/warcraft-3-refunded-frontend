<template>
    <section>
        <h3>Lackluster Improvements</h3>
        <h4>Non-Revamped Cinematics</h4>
        <div class="divider"></div>
        <p class="large">With Warcraft III: Reforged, you can now watch the original cinematics from 2002, in their original quality, completely unchanged!</p>
        <p class="large">And if you were disappointed to see Blizzard adding more dynamic and interesting cutscenes, then worry not! They backed far, far away from that idea. But not before taking your preorder based on what they originally showed!</p>
        <youtube video-id="-4K2u2KbpdE" :player-width="playerDimensions.width" :player-height="playerDimensions.height" />
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class BadCinematics extends Vue {
        get playerDimensions() {
            if(window.innerWidth < 540) {
                return {width: 384, height: 216};
            }

            if(window.innerWidth < 700) {
                return {width: 512, height: 288};
            }

            if(window.innerWidth < 800) {
                return {width: 640, height: 360};
            }

            if(window.innerWidth < 900) {
                return {width: 788, height: 432};
            }

            if(window.innerWidth < 1050) {
                return {width: 896, height: 504};
            }

            return {width: 1024, height: 576};
        }
    }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/variables";

    section {
        background-image: url("https://bnetcmsus-a.akamaihd.net/cms/template_resource/GBTA0BSUH9V61541005863458.jpg");
        background-size: cover;
        background-position: center top;
    }

    p:nth-of-type(2) {
        margin-bottom: 3rem;
    }
</style>
