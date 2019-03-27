<template>
  <address>
    <div 
      class="company">
      <span 
        v-if="title"
        v-text="title"
      />
    </div>
    <div 
      class="department">
      <span 
        v-if="department"
        v-text="department"
      />
    </div>
    <div 
      class="name">
      <span 
        v-for="(item, key, index) in name"
        :key="index"
        :class="key"
        v-text="item"
      />
    </div>
    <div 
      class="streetHousenumber">
      <span 
        v-if="address.street"
        v-text="address.street"
      />
    </div>
    <div 
      class="city">
      <span 
        v-if="address.zip" 
        v-text="address.zip"
      />
      <span 
        v-if="address.city" 
        v-text="address.city"
      />
    </div>
    <div 
      class="country">
      <span 
        v-if="address.country"
        v-text="address.country"
      />
    </div>
  </address>
</template>

<script>
export default {
  name: 'CoverletterInformation',
  props: {
    title: {
      default: '',
      type: String
    },
    department: {
      default: '',
      type: String
    },
    name: {
      default: null,
      type: Object,
      validator: value => {
        const props = ['speech', 'first', 'last']
        return props.every(key => key in value)
      }
    },
    address: {
      default: null,
      type: Object,
      validator: value => {
        const props = ['street', 'zip', 'city', 'country']
        return props.every(key => key in value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
address {
  width: 100%;
  margin: $s 0 ($s * 3) 0;
  font-style: normal;
  .name {
    > span {
      margin: 0 $s-xxs 0 0;
    }
  }
}
</style>
