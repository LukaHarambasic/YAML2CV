<template>
  <div class="timeline">
    <list-item
      :item="item"
      :justifyDescription="justifyDescription" />
  </div>
</template>

<script>
import ListItem from '~/components/ListItem'
export default {
  components: {
    ListItem
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
  border-left: 2px $c-secondary solid;
  &:before {
  }
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
