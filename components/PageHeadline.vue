<template>
  <h2
    v-text="title" />
</template>

<script>
export default {
  name: 'PageHeadline',
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
    color: $c-font-headline;
    text-align: left;
    margin: 0 0 $s-xxs 0;
    font-weight: 600;
  }
</style>
