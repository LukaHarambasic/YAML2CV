<template>
  <section>
    <base-headline
      v-if="object.title"
      :title="object.title"/>
    <ul 
      v-if="settings.useTimeLine">
      <segment-list-timeline-item
        v-for="(item, index) in object.items"
        :key="index"
        :item="item"
        :justifyDescription="settings.justifyDescription"/>
    </ul>
    <ul
      v-else>
      <segment-list-item
        v-for="(item, index) in object.items"
        :key="index"
        :item="item"
        :justifyDescription="settings.justifyDescription"/>
    </ul>
  </section>
</template>

<script>
import SegmentListItem from '~/components/SegmentListItem'
import SegmentListTimelineItem from '~/components/SegmentListTimelineItem'
import BaseHeadline from '~/components/BaseHeadline'

export default {
  name: 'SegmentList',
  components: {
    SegmentListItem,
    SegmentListTimelineItem,
    BaseHeadline
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
