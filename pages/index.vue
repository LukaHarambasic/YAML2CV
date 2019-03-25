<template>
  <section>
    <lh-cv-page
      :settings="cv.settings"
      :footer="cv.footer">
      <lh-cv-coverletter-information
        :information="cv.person"/>
      <lh-cv-coverletter-information
        :information="cv.company"/>
      <lh-cv-coverletter-text
        :person="cv.person"
        :company="cv.company"
        :coverletter="cv.coverletter" />
    </lh-cv-page>
    <lh-cv-page
      :isFirst="true"
      :settings="cv.settings"
      :footer="cv.footer">
      <lh-cv-header
        :name="cv.person.name" />
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
        :object="cv.skills"
        :settings="cv.settings" />
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
        class="voluntary"
        :object="cv.voluntary"
        :settings="cv.settings" />
    </lh-cv-page>
  </section>
</template>

<script>
import LhCvPage from '~/components/LhCvPage.vue'
import LhCvCoverletterInformation from '~/components/LhCvCoverletterInformation.vue'
import LhCvCoverletterText from '~/components/LhCvCoverletterText.vue'
import LhCvList from '~/components/LhCvList.vue'
import LhCvSkillsList from '~/components/LhCvSkillsList.vue'
import LhCvHeader from '~/components/LhCvHeader.vue'
import cv from '~/assets/cv.yml'

export default {
  name: 'Cv',
  components: {
    LhCvPage,
    LhCvCoverletterInformation,
    LhCvCoverletterText,
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
    width: auto;
    height: auto;
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
      margin: $s-l 0 0 0;
    }
  }
  .voluntary{
    @media screen and (max-width: $desktop) {
    margin: 0 0 $s-xl 0;
    }
  }
}
</style>
