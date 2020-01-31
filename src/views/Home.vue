<template>
    <div>
        <hero-header />
        <bad-cinematics />
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import HeroHeader from '@/components/HeroHeader';
    import BadCinematics from '@/components/BadCinematics';

    @Component({
        components: { HeroHeader, BadCinematics },
    })
    export default class Home extends Vue {
    }
</script>
