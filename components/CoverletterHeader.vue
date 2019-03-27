<template>
  <header>
    <span 
      v-for="(item, key, index) in address"
      :key="index"
      :class="key"
      v-text="item"
    />
  </header>
</template>

<script>
export default {
  name: 'CoverletterHeader',
  props: {
    address: {
      default: null,
      type: Object,
      validator: value => {
        const props = ['street', 'city', 'country']
        return props.every(key => key in value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: $c-primary;
  color: $c-secondary;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: $s-s 0;
  border-radius: $radius $radius 0 0;
  > span {
    margin: 0 $s-xxs 0 0;
    &::after {
      content: ',';
    }
    &:last-of-type {
      margin: 0 0 0 0;
      &::after {
        content: '';
      }
    }
  }
}
</style>
