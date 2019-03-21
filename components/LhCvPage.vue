<template>
  <div
    class="page"
    :class="{ first: isFirst}">
    <slot />
    <lh-cv-footer
      :links="footer"
      :isFirst="isFirst"
      :showLogo="settings.showLogo" />
  </div>
</template>

<script>
import LhCvFooter from '~/components/LhCvFooter.vue'
export default {
  name: 'LhCvPage',
  components: {
    LhCvFooter
  },
  props: {
    isFirst: {
      type: Boolean,
      default: false
    },
    settings: {
      required: true,
      type: Object
    },
    footer: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  background: $c-white;
  box-shadow: 0 0 40px $c-primary-shadow;
  border-radius: $radius;
  width: $s * 49.625;
  height: $s * 71.25;
  padding: ($s * 4) ($s * 3) ($s * 3) ($s * 3);
  margin: ($s * 6) 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: $desktop) {
    width: 100%;
    height: auto;
    //padding: $s;
    padding: 0;
    margin: 0;
    display: block;
  }
  @media print {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    height: 1078px;
    width: 794px;
  }
  &.first {
    background: linear-gradient(
      to bottom,
      $c-primary 0%,
      $c-primary 20%,
      #000000 20%,
      $c-white 20%,
      $c-white 100%
    );
  }
  &:last-of-type {
    margin-bottom: ($s * 6);
    @media print {
      margin: 0;
    }
  }
}
</style>
