<template>
  <section>
    <h3
      v-if="object.title"
      v-text="object.title" />
    <ul>
      <li
        v-for="(item, index) in object.items"
        :key="index"
        v-text="item" />
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LhCvSkills',
  props: {
    object: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  h3 {
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
    color: $c-font-headline;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      margin: 0;
      display: inline;
      &:after {
        content: ",";
        margin: 0 $s-xxs 0 0;
      }
      &:last-child {
        &:after {
          content: "";
        }
      }
    }
  }
}
</style>
