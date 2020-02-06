<template>
    <div>
        <hero-header />
        <cut-features />
        <anti-consumer />
        <bad-cinematics />
        <map-ownership />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HeroHeader from '@/components/HeroHeader.vue';
    import BadCinematics from '@/components/BadCinematics.vue';
    import CutFeatures from '@/components/CutFeatures.vue';
    import AntiConsumer from '@/components/AntiConsumer.vue';
    import MapOwnership from '@/components/MapOwnership.vue';

    @Component({
        components: {HeroHeader, CutFeatures, BadCinematics, AntiConsumer, MapOwnership},
    })
    export default class Home extends Vue {
        public track() {
            this.$ga.page('/');
        }
    }
</script>
