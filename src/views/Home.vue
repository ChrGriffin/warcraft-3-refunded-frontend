<template>
    <div>
        <hero-header />
        <cut-features />
        <bad-cinematics />
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import HeroHeader from '@/components/HeroHeader';
    import BadCinematics from '@/components/BadCinematics';
    import CutFeatures from '@/components/CutFeatures';

    @Component({
        components: { HeroHeader, CutFeatures, BadCinematics },
    })
    export default class Home extends Vue {
    }
</script>
