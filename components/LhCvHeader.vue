<template>
  <header class="header">
    <img src="../static/profile.jpg" />
    <h1>
      <span v-text="name.last" /><br/>
      <span class="firstname" v-text="name.first" />
    </h1>
  </header>
</template>

<script>
  export default {
    name: 'LhCvHeader',
    props: {
      name: {
        required: true,
        type: Object
      },
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background: $c-white;
    border-radius: $radius;
    width: 100%;
    height: 20%;
    margin: 0 0 ($s * 2) 0;
    display: flex;
    flex-flow: row nowrap;
    @media screen and (max-width: $desktop) {
      flex-flow: column nowrap;
      margin: 0;
      hieght: 0;
    }
    img {
      max-height: 100%;
      border-radius: $radius 0 0 0;
      @media screen and (max-width: $desktop) {
        border-radius: $radius $radius 0 0;
        max-height: auto;
        max-width: 100%;
      }
    }
    h1 {
      color: $c-primary;
      font-size: $fs-xl;
      margin: $s 0 0 $s-xl;
      line-height: 1;
      display: inline;
      @media screen and (max-width: $desktop) {
        font-size: $fs-l*1.5;
        margin: 0;
      }
    }
  }
</style>
