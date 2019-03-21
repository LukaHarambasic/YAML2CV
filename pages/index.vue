<template>
  <section>
    <lh-cv-page
      :isFirst="true"
      :settings="cv.settings"
      :footer="cv.footer">
      <lh-cv-header
        :name="cv.name" />
      <div 
        class="main">
        <lh-cv-list
          v-if="cv.education.items"
          :object="cv.education"
          :settings="cv.settings" />
        <lh-cv-list
          v-if="cv.experienceFirstPage.items"
          :object="cv.experienceFirstPage"
          :settings="cv.settings" />
      </div>
      <lh-cv-skills-list 
        class="skills"
        v-if="cv.skills.items"
        :object="cv.skills" />
    </lh-cv-page>
    <lh-cv-page
      :settings="cv.settings"
      :footer="cv.footer">
      <lh-cv-list
        v-if="cv.experienceSecondPage.items"
        :object="cv.experienceSecondPage"
        :settings="cv.settings" />
      <lh-cv-list
        v-if="cv.voluntary.items"
        :object="cv.voluntary"
        :settings="cv.settings" />
    </lh-cv-page>
  </section>
</template>

<script>
import LhCvPage from '~/components/LhCvPage.vue'
import LhCvList from '~/components/LhCvList.vue'
import LhCvSkillsList from '~/components/LhCvSkillsList.vue'
import LhCvHeader from '~/components/LhCvHeader.vue'
import cv from '~/assets/cv.yml'

export default {
  name: 'Cv',
  components: {
    LhCvPage,
    LhCvList,
    LhCvSkillsList,
    LhCvHeader
  },
  data() {
    return {
      cv: cv
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  @media print {
    margin: 0;
    display: block;
    width: auto;
  }
  @media screen and (max-width: $desktop) {
    width: 100%;
  }
  .main {
    width: 65%;
    @media screen and (max-width: $desktop) {
      width: 100%;
    }
  }
  .skills {
    width: 30%;
    @media screen and (max-width: $desktop) {
      width: 100%;
    }
  }
}
</style>
