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
        background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/background5_kaccxp.jpg");
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
            background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/forums_sc6zgh.png");
        }

        &.twitter {
            background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/twitter_dikt46.png");
        }

        &.facebook {
            background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/facebook_vpzhdk.png");
        }

        &.youtube {
            background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914973/warcraft_3_refunded/youtube_d8elos.png");
        }

        &.reddit {
            background-image: url("https://res.cloudinary.com/dqqlm018i/image/upload/v1580914974/warcraft_3_refunded/reddit_luqeek.png");
        }
    }
</style>
