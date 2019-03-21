<template>
  <aside>
    <h2
      v-if="object.title"
      v-text="object.title" />
    <LhCvSkills
      class="skillsList"
      v-for="(object, index) in object.items"
      :key="index"
      :object="object" />
  </aside>
</template>

<script>
import LhCvSkills from '~/components/LhCvSkills'
export default {
  name: 'LhCvSkillsList',
  components: {
    LhCvSkills
  },
  props: {
    object: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    position: relative;
    color: $c-primary;
    text-align: left;
    margin: 0 0 $s-xs 0;
    font-weight: 600;

    &:after {
      position: absolute;
      content: ' ';
      bottom: 0;
      left: 0;
      height: 2px;
      width: 3rem;
      background: $c-accent;
    }
  }
  .skillsList {
    margin: 0 0 0 $s-xs;
  }
</style>
