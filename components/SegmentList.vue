<template>
  <section>
    <base-headline
      :title="title"
    />
    <ul 
      v-if="useTimeline">
      <segment-list-timeline-item
        v-for="(segment, index) in segments"
        :key="index"
        :title="segment.title"
        :description="segment.description"
        :position="segment.position"
        :location="segment.location"
        :date="segment.date"
        :justify-description="justifyDescription"
      />
    </ul>
    <ul
      v-else>
      <segment-list-item
        v-for="(segment, index) in segments"
        :key="index"
        :title="segment.title"
        :description="segment.description"
        :position="segment.position"
        :location="segment.location"
        :date="segment.date"
        :justify-description="justifyDescription"
      />
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
    title: {
      default: '',
      type: String
    },
    segments: {
      default: null,
      type: Array
    },
    useTimeline: {
      default: false,
      type: Boolean
    },
    justifyDescription: {
      default: false,
      type: Boolean
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
