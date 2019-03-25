<template>
  <aside>
    <page-headline
      v-if="object.title"
      :title="object.title" />
    <div v-if="settings.showSkillLevel">
      <skills-levels
        class="skillsList"
        v-for="(skills, index) in object.items"
        :key="index"
        :object="skills"
        :settings="settings" />
    </div>
    <div v-else>
      <skills-items
        class="skillsList"
        v-for="(skills, index) in object.items"
        :key="index"
        :object="skills" />
    </div>
  </aside>
</template>

<script>
import SkillsItems from '~/components/SkillsItems'
import SkillsLevels from '~/components/SkillsLevels'
import PageHeadline from '~/components/PageHeadline'

export default {
  name: 'SkillsList',
  components: {
    SkillsItems,
    SkillsLevels,
    PageHeadline
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
    margin: 0 0 $s-xs 0;
    &:last-child {
      @media screen and (max-width: $desktop) {
        margin: 0
      }
    }
  }
</style>
