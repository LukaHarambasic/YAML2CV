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
    name: 'LhCvSkillSet',
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
    flex-direction: row;
    flex-wrap: nowrap;
    img {
      max-height: 100%;
      border-radius: $radius 0 0 0;
    }
    h1 {
      color: $c-primary;
      font-size: $fs-xl;
      margin: $s 0 0 $s-xl;
      width: 100%;
      line-height: 1;
    }
  }
</style>
