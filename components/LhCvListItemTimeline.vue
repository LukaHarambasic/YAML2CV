<template>
  <div class="timeline">
    <lh-cv-list-item
      :item="item"
      :justifyDescription="justifyDescription" />
  </div>
</template>

<script>
import LhCvListItem from '~/components/LhCvListItem'
export default {
  components: {
    LhCvListItem
  },
  props: {
    item: {
      required: true,
      type: Object
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
  border-left: 2px #757985 solid;
  &:before {
  }
  &:after {
    content: '';
    top: 0;
    left: -9px;
    position: absolute;
    width: $s-s;
    height: $s-s;
    background: $c-white;
    border: 2px #757985 solid;
    border-radius: 50%;
  }
  &:last-of-type {
    > li {
    padding: 0;
    }
  }
}
</style>
