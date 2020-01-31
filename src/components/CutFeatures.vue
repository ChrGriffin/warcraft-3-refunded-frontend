<template>
    <section>
        <div class="grid">
            <div class="content">
                <h3>Broken Promises</h3>
                <h4>Cut Features</h4>
                <div class="divider"></div>
                <div class="text">
                    <p class="large">Warcraft III: Reforged boasts an impressive number of fun and exciting features that were promised before being cut during development. Some of them are still being advertised as of this moment!</p>
                    <div class="item">
                        <p class="title">Campaign Overhaul</p>
                        <p>A full campaign overhaul to bring the story and location in line with Warcraft lore as it stands today. Instead, it's the exact same campaign with new models.</p>
                    </div>

                    <div class="item">
                        <p class="title">Improved Cutscenes</p>
                        <p>Over 4 hours of new cutscenes with cinematic cameras, new voice acting, and more story. Psyche! Same cutscenes, same voice acting, unchanged story.</p>
                    </div>

                    <div class="item">
                        <p class="title">Player Choice</p>
                        <p>Ability to choose between the old and new campaign, voice acting, and user interface. Fuck you, you'll take the old and you'll damn well like it.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class CutFeatures extends Vue {
    }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/variables";

    section {
        background-image: linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url("./../assets/images/background2.jpg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: calc(50% + 250px) center;
    }

    .grid {
        justify-content: flex-end;
    }

    .content {
        width: 80%;
        padding-left: 30%;

        .text {
            text-align: left;

            p.large {
                margin-bottom: 2rem;
            }
        }
    }

    .item {
        margin-bottom: 1rem;
        padding-left: 2rem;

        p {
            color: $offwhite;
            font-size: 1.2rem;
            font-weight: bold;
            line-height: 1.4;
        }

        .title {
            color: $white;
            font-size: 1.8rem;
            letter-spacing: 0;
            line-height: 1.8;
        }
    }
</style>
