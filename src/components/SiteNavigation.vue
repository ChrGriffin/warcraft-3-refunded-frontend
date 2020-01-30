<template>
  <div></div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SiteNavigation extends Vue {
    }
</script>

<style scoped lang="scss">
  @import "./../assets/scss/variables";

  div {
    background-color: $black;
    height: 40px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.15);
  }
</style>
