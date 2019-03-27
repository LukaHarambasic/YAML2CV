<template>
  <div
    :class="{ first: isFirstCv }"
    class="page">
    <slot />
    <page-footer
      :links="footerLinks"
      :is-first="isFirstCv"
      :logo-path="logoPath"
    />
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter.vue'
export default {
  name: 'Page',
  components: {
    PageFooter
  },
  props: {
    isFirstCv: {
      type: Boolean,
      default: false
    },
    logoPath: {
      type: String,
      default: ''
    },
    footerLinks: {
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
  width: $s-page-width;
  height: $s-page-height;
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
    padding: $s-l;
    margin: 0;
    box-shadow: none;
    border-radius: 0;
  }
  @media print {
    page-break-before: always;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    height: auto;
    width: auto;
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
    @media screen and (max-width: $desktop) {
      border-radius: $radius $radius 0 0;
      padding-bottom: 0;
    }
  }
  &:last-of-type {
    margin-bottom: ($s * 6);
    @media print {
      margin: 0;
    }
    @media screen and (max-width: $desktop) {
      margin: 0;
      border-radius: 0 0 $radius $radius;
    }
  }
}
</style>
