<template>
  <section>
    <h3
      v-if="object.title"
      v-text="object.title" />
    <ul>
      <li
        v-for="(skill, index) in sortedSkills"
        :key="index">
        <h4 v-text="skill.title" />
        <div class="bar">
          <div 
            class="filled"
            :style="{width: ((skill.level / settings.maxSkillLevel) * 100) + '%'}" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SkillsLevels',
  props: {
    object: {
      required: true,
      type: Object
    },
    settings: {
      required: true,
      type: Object
    }
  },
  computed: {
    sortedSkills() {
      const skills = this.object.items
      switch(this.settings.sortSkills) {
        case 'decreasing':
          return skills.sort((a, b) => b.level - a.level)
        case 'increasing':
          return skills.sort((a, b) => a.level - b.level)
        case 'alphabetical':
          return skills.sort((a, b) => {
            if (a.title < b.title) return -1;
            else if (a.title > b.title) return 1;
            return 0;
          })
        default:
          return skills
      }
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
    flex-flow: column nowrap;
    li {
      margin: 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      h4 {
        display: inline-block;
        width: 55%;
        margin: 0;
        font-weight: 400;
      }
      .bar {
        background: $c-secondary;
        display: relative;
        width: 40%;
        height: $s;
        border-radius: $radius;
        overflow: hidden;
        .filled {
          display: absolut;
          top: 0;
          left: 0;
          border-radius: 0 $radius $radius 0;
          height: $s;
          background: $c-accent;
          box-shadow: 0 0 8px $c-primary-shadow;
        }
      }
    }
  }
}
</style>
