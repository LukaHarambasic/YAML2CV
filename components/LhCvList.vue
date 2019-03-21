<template>
  <section>
    <lh-cv-list-headline
      v-if="object.title"
      v-text="object.title" />
    <ul>
      <lh-cv-list-item
        v-for="(item, index) in object.items"
        :key="index"
        :item="item"
        :justifyDescription="settings.justifyDescription" />
    </ul>
  </section>
</template>

<script>
import LhCvListItem from '~/components/LhCvListItem'
import LhCvListHeadline from '~/components/LhCvListHeadline'
export default {
  name: 'LhCvList',
  components: {
    LhCvListItem,
    LhCvListHeadline
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
