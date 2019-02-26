<template>
  <section
    class="list">
    <h3
      v-if="title"
      v-text="title" />
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        v-text="item" />
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LhCvSkillSet',
  props: {
    title: {
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 0;
  h3 {
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
  }
  &:not(:first-of-type) {
    /*margin-top: $s_default;*/
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 $s-xs 0;
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
