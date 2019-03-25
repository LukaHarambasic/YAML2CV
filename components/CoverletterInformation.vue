<template>
  <address>
    <div class="company">
      <span 
        v-if="information.company"
        v-text="information.company" />
    </div>
    <div class="department">
      <span 
        v-if="information.department"
        v-text="information.department" />
    </div>
    <div class="name">
      <span 
        v-if="information.name"
        v-text="information.name.first" />
      <span 
        v-if="information.name" 
        v-text="information.name.last" />
    </div>
    <div class="streetHousenumber">
      <span 
        v-if="information.address"
        v-text="information.address.street" />
      <span 
        v-if="information.address" 
        v-text="information.address.housenumber" />
    </div>
    <div class="zipCity">
      <span 
        v-if="information.address"
        v-text="information.address.zip" />
      <span 
        v-if="information.address" 
        v-text="information.address.city" />
    </div>
    <div class="country">
      <span 
        v-if="information.address"
        v-text="information.address.country" />
    </div>
    <div class="phone">
      <span 
        v-if="information.contact"
        v-text="information.contact.phone" />
    </div>
    <div class="mail">
      <span 
        v-if="information.contact"
        v-text="information.contact.mail" />
    </div>
  </address>
</template>

<script>
  export default {
    name: 'CoverletterInfomration',
    props: {
      information: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
address {
  width: 100%;
  margin: 0 0 ($s * 3) 0;
}
</style>