<template>
  <section
    class="list">
    <h2
      v-if="title"
      v-text="title" />
    <ul>
      <LhCvListItem
        v-for="(item, index) in items"
        :key="index"
        :item="item" />
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
    title: {
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 0 0 $s-l 0;
  &:last-of-type {
    margin: 0;
  }
  h2 {
    color: $c-primary;
    text-align: left;
    margin: 0 0 0 0;
    font-weight: 600;
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
