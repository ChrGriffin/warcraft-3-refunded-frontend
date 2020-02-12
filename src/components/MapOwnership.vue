<template>
    <section>
        <h3>They Own Your Work</h3>
        <h4>Custom Map Ownership</h4>
        <div class="divider"></div>
        <p class="large">Blizzard clearly isn't risking another DOTA getting away from them. Buried away in Warcraft 3: Reforged's Terms of Service is a clause that gives them total ownership of any custom maps created by users, including moral rights<sup>*</sup>.</p>
        <blockquote>Custom Games are and shall remain the sole and exclusive property of Blizzard. Without limiting the foregoing, you hereby assign to Blizzard all of your rights, title, and interest in and to all Custom Games, including but not limited to any copyrights in the content of any Custom Games. […] To the extent you are prohibited from transferring or assigning your moral rights to Blizzard by applicable laws, to the utmost extent legally permitted, you waive any moral rights or similar rights you may have in all such Custom Games, without any remuneration.</blockquote>
        <p class="note"><sup>*</sup>'Moral rights' are your rights as a creator - of anything - to enforce your attribution as the creator of the work, along with other rights. By demanding your moral rights to any custom maps, Blizzard is able to decide how, when, or if they attribute you as the creator.</p>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class BadCinematics extends Vue {
    }
</script>

<style scoped lang="scss">
    @import "./../assets/scss/variables";

    section {
        background-image: url("./../assets/images/background6.jpg");
        background-size: cover;
        background-position: top center;
    }

    p {
        position: relative;
    }

    sup {
        position: relative;
        top: 0.25rem;
        line-height: 0;
    }

    p.large {
        margin-bottom: 2rem;
    }

    p.note {
        text-align: left;
        font-size: 0.9rem;
        font-style: italic;

        sup {
            top: 0.1rem;
        }
    }

    blockquote {
        background-image: url("./../assets/images/background7.jpg");
    }
</style>
