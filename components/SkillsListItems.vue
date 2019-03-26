<template>
  <section>
    <h3
      v-if="title"
      v-text="title"/>
    <ul>
      <li
        v-for="skill in skills"
        :key="skill.title"
        v-text="skill.title"/>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SkillsItems',
  props: {
    title: {
      default: '',
      type: String
    },
    skills: {
      default: null,
      type: Array
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
