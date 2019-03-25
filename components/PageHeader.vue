<template>
  <header class="header">
    <img src="../static/profile.png" />
    <h1>
      <span v-text="name.first" /><br/>
      <span v-text="name.last" />
    </h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
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
    //background: $c-white;
    border-radius: $radius;
    width: 100%;
    height: 20%;
    margin: 0 0 ($s * 2) 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    @media screen and (max-width: $desktop) {
      flex-flow: column nowrap;
      margin: 0;
    }
    img {
      max-height: 100%;
      border-radius: $radius 0 0 0;
      @media screen and (max-width: $desktop) {
        border-radius: $radius $radius 0 0;
        margin: $s-xl 0 0 0;
        max-height: auto;
        max-width: 80%;
      }
    }
    h1 {
      color: $c-white;
      font-size: $fs-xl;
      margin: 0 0 0 $s-xl;
      line-height: 1;
      display: inline;
      @media screen and (max-width: $desktop) {
        font-size: $fs-l*1.5;
        margin: $s 0 $s 0;
      }
    }
  }
</style>
