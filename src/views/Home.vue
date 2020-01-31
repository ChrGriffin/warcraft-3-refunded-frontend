<template>
    <div>
        <hero-header />
        <cut-features />
        <bad-cinematics />
        <anti-consumer />
        <map-ownership />
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import HeroHeader from '@/components/HeroHeader';
    import BadCinematics from '@/components/BadCinematics';
    import CutFeatures from '@/components/CutFeatures';
    import AntiConsumer from '@/components/AntiConsumer';
    import MapOwnership from '@/components/MapOwnership';

    @Component({
        components: {HeroHeader, CutFeatures, BadCinematics, AntiConsumer, MapOwnership},
    })
    export default class Home extends Vue {
    }
</script>
