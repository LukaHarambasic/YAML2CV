<template>
  <main>
    <nuxt/>
  </main>
</template>

<script>
  export default {
    components: {
    },
  }
</script>

<style lang="scss">
main {
  background: $c-secondary;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  @media screen and (max-width: $desktop) {
    margin: 3%;
    width: 94%;
    background: $c-white;
    box-shadow: 0 0 40px $c-primary-shadow;
    border-radius: $radius;
  }
}
</style>
