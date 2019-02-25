<template>
  <div
    class="page"
    :class="{ first: isFirst}">
    <slot />
    <LhCvFooter />
  </div>
</template>

<script>
export default {
  name: 'LhCvPage',
  props: {
    isFirst: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  background: $c-white;
  box-shadow: 0 0 40px #cccccc; //TODO: change to opacity version from primary
  border-radius: 4px; //TODO: radius to var
  width: $s * 49.625;
  height: $s * 71.25;
  padding: ($s * 4) ($s * 3) ($s * 3) ($s * 3);
  margin: ($s * 6) 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
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
  }
}
</style>
