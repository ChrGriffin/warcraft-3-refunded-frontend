<template>
    <section>
        <h3>Lackluster Improvements</h3>
        <h4>Non-Revamped Cinematics</h4>
        <div class="divider"></div>
        <p class="large">With Warcraft III: Reforged, you can now watch the original cinematics from 2002, in their original quality, completely unchanged!</p>
        <p class="large">And if you were disappointed to see Blizzard adding more dynamic and interesting cutscenes, then worry not! They backed far, far away from that idea. But not before taking your preorder based on what they originally showed!</p>
        <div class="video-wrapper" v-bind:style="{width: playerDimensions.width + 'px', height: playerDimensions.height + 'px'}">
            <div v-if="!videoPlaying" v-bind:style="{width: playerDimensions.width + 'px', height: playerDimensions.height + 'px'}" class="video-preview" @click="playVideo">
                <img :src="require('@/assets/images/youtube.png')" />
            </div>
            <youtube v-if="videoPlaying" youtube video-id="-4K2u2KbpdE" :player-width="playerDimensions.width" :player-height="playerDimensions.height" :player-vars="{autoplay: 1}" />
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class BadCinematics extends Vue {

        private videoPlaying = false;

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

        public playVideo() {
            this.videoPlaying = true;
        }
    }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/variables";

    section {
        background-image: url("./../assets/images/background3.jpg");
        background-size: cover;
        background-position: center top;
    }

    p:nth-of-type(2) {
        margin-bottom: 3rem;
    }

    .video-wrapper {
        margin: 0 auto;
        display: inline-block;

        .video-preview {
            background-image: url("./../assets/images/videopreview.png");
            background-size: cover;
            position: relative;
            border: 2px solid $darkgrey;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }

            &:hover {
                cursor: pointer;
                border: 2px solid $offwhite;
            }
        }
    }


</style>
