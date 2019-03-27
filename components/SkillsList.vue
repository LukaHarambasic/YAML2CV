<template>
  <aside>
    <base-headline
      :title="title"/>
    <div 
      v-if="showSkillLevel"> 
      <skills-list-levels
        v-for="(list, index) in lists"
        :key="index"
        :title="list.title"
        :skills="list.skills"
        :sort-skills-by="sortSkillsBy"
        :max-skill-level="maxSkillLevel"
        class="list"
      />
    </div>
    <div 
      v-else>
      <skills-list-items
        v-for="(list, index) in lists"
        :key="index"
        :title="list.title"
        :skills="list.skills"
        class="list"
      />
    </div>
  </aside>
</template>

<script>
import SkillsListItems from '~/components/SkillsListItems'
import SkillsListLevels from '~/components/SkillsListLevels'
import BaseHeadline from '~/components/BaseHeadline'

export default {
  name: 'SkillsList',
  components: {
    SkillsListItems,
    SkillsListLevels,
    BaseHeadline
  },
  props: {
    title: {
      default: '',
      type: String
    },
    lists: {
      default: null,
      type: Array
    },
    showSkillLevel: {
      default: true,
      type: Boolean
    },
    sortSkillsBy: {
      default: 'none',
      type: String
    },
    maxSkillLevel: {
      default: 5,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 0 0 $s-xs 0;
  &:last-child {
    @media screen and (max-width: $desktop) {
      margin: 0;
    }
  }
}
</style>
