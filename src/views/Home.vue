<template>
    <hero-header />
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import HeroHeader from '@/components/HeroHeader';

    @Component({
        components: { HeroHeader },
    })
    export default class Home extends Vue {
    }
</script>
