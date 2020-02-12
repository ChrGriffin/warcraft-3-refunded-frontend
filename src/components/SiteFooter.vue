<template>
    <footer>
        <h3>Definitely Don't Complain on Social Media</h3>
        <div class="divider"></div>
        <div class="grid">
            <a class="forums" target="_blank" href="https://us.forums.blizzard.com/en/warcraft3/"></a>
            <a class="twitter" target="_blank" href="https://twitter.com/Warcraft3"></a>
            <a class="facebook" target="_blank" href="https://www.facebook.com/PlayWarcraft3/"></a>
            <a class="youtube" target="_blank" href="https://www.youtube.com/Warcraft3"></a>
            <a class="reddit" target="_blank" href="https://www.reddit.com/r/warcraft3/"></a>
        </div>
    </footer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SiteFooter extends Vue {
    }
</script>

<style scoped lang="scss">
    footer {
        background-image: url("./../assets/images/background8.jpg");
        background-position: top center;
        background-size: cover;
    }

    .grid {
        justify-content: space-between;
        max-width: 350px;
        margin: 0 auto;
    }

    a {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;

        &.forums {
            background-image: url("./../assets/images/forums.png");
        }

        &.twitter {
            background-image: url("./../assets/images/twitter.png");
        }

        &.facebook {
            background-image: url("./../assets/images/facebook.png");
        }

        &.youtube {
            background-image: url("./../assets/images/youtube.png");
        }

        &.reddit {
            background-image: url("./../assets/images/reddit.png");
        }
    }
</style>
