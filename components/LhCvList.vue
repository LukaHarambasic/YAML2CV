<template>
  <section>
    <h2
      v-if="object.title"
      v-text="object.title" />
    <ul>
      <LhCvListItem
        v-for="(item, index) in object.items"
        :key="index"
        :item="item"
        :justifyDescription="settings.justifyDescription" />
    </ul>
  </section>
</template>

<script>
import LhCvListItem from '~/components/LhCvListItem'
export default {
  name: 'LhCvList',
  components: {
    LhCvListItem
  },
  props: {
    object: {
      required: true,
      type: Object
    },
    settings: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 0 0 $s-l 0;
  width: 100%;
  &:last-of-type {
    margin: 0;
  }
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
  ul {
    padding: 0;
    margin: $s-xs 0 0 $s-xs;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
