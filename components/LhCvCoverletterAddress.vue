<template>
  <address>
    <div class="name">
      <span 
        v-if="address.first" />
      <span 
        v-if="address.last" />
    </div>
    <div class="streetHousenumber">
      <span 
        v-if="address.street" />
      <span 
        v-if="address.housenumber" />
    </div>
    <div class="zipCity">
      <span 
        v-if="address.zip" />
      <span 
        v-if="address.city" />
    </div>
    <div class="phone">
      <span 
        v-if="contact.phone" />
    </div>
    <div class="mail">
      <span 
        v-if="contact.mail" />
    </div>
  </address>
</template>

<script>
  export default {
    name: 'LhCvCoverletterAddress',
    props: {
      address: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
address {

}
</style>