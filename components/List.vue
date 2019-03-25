<template>
  <section>
    <page-headline
      v-if="object.title"
      :title="object.title" />
    <ul v-if="settings.useTimeLine">
      <list-item-timeline
        v-for="(item, index) in object.items"
        :key="index"
        :item="item"
        :justifyDescription="settings.justifyDescription" />
    </ul>
    <ul v-else>
      <list-item
        v-for="(item, index) in object.items"
        :key="index"
        :item="item"
        :justifyDescription="settings.justifyDescription" />
    </ul>
  </section>
</template>

<script>
import ListItem from '~/components/ListItem'
import ListItemTimeline from '~/components/ListItemTimeline'
import PageHeadline from '~/components/PageHeadline'
export default {
  name: 'List',
  components: {
    ListItem,
    ListItemTimeline,
    PageHeadline
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
    margin: 0 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: $desktop) {
      margin: $s-xs 0 0 0;
    }
  }
}
</style>
