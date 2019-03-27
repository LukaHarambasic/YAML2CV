<template>
  <div 
    class="timeline">
    <segment-list-item
      :title="title"
      :description="description"
      :position="position"
      :location="location"
      :date="date"
      :justify-description="justifyDescription"
    />
  </div>
</template>

<script>
import SegmentListItem from '~/components/SegmentListItem'

export default {
  components: {
    SegmentListItem
  },
  props: {
    title: {
      default: '',
      type: String
    },
    description: {
      default: '',
      type: String
    },
    position: {
      default: '',
      type: String
    },
    location: {
      default: '',
      type: String
    },
    date: {
      default: null,
      type: Object,
      validator: date => {
        return date.hasOwnProperty('to') && date.hasOwnProperty('from')
      }
    },
    justifyDescription: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  margin: 0 0 0 $s-xs;
  padding: 0 0 0 $s-s;
  border-left: 2px $c-secondary solid;
  &:after {
    content: '';
    top: 0px;
    left: -9px;
    position: absolute;
    width: $s-xs;
    height: $s-xs;
    background: $c-secondary;
    border: $s-xxs $c-white solid;
    border-radius: 50%;
  }
  &:last-of-type {
    border-left: 2px $c-white solid;
    > li {
      padding: 0;
    }
  }
}
</style>
