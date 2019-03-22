<template>
  <aside>
    <lh-cv-list-headline
      v-if="object.title"
      :title="object.title" />
    <lh-cv-skills-levels
      class="skillsList"
      v-if="settings.showSkillLevel"
      v-for="(object, index) in object.items"
      :key="index"
      :object="object"
      :settings="settings" />
    <lh-cv-skills
      class="skillsList"
      v-else
      v-for="(object, index) in object.items"
      :key="index"
      :object="object" />
  </aside>
</template>

<script>
import LhCvSkills from '~/components/LhCvSkills'
import LhCvSkillsLevels from '~/components/LhCvSkillsLevels'
import LhCvListHeadline from '~/components/LhCvListHeadline'
export default {
  name: 'LhCvSkillsList',
  components: {
    LhCvSkills,
    LhCvSkillsLevels,
    LhCvListHeadline
  },
  props: {
    object: {
      required: true,
      type: Object
    },
    settings: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .skillsList {
    margin: 0 0 $s-xs $s-xs;
    @media screen and (max-width: $desktop) {
      margin: 0 0 $s-xs 0;
    }
    &:last-child {
      @media screen and (max-width: $desktop) {
        margin: 0
      }
    }
  }
</style>
