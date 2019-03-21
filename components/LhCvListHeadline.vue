<template>
  <h2
    v-text="title" />
</template>

<script>
export default {
  name: 'LhCvListHeadline',
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    position: relative;
    color: $c-primary;
    text-align: left;
    margin: 0 0 $s-s 0;
    font-weight: 600;
    &:after {
      position: absolute;
      content: ' ';
      bottom: 0;
      left: 0;
      width: 3rem;
      border-bottom: 2px solid $c-accent;
    }
  }
</style>
