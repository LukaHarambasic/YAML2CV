<template>
  <section>
    <page
      :settings="cv.settings"
      :footer="cv.footer">
      <coverletter-information
        :information="cv.person"/>
      <coverletter-information
        :information="cv.company"/>
      <coverletter-text
        :person="cv.person"
        :company="cv.company"
        :coverletter="cv.coverletter" />
    </page>
    <page
      :isFirst="true"
      :settings="cv.settings"
      :footer="cv.footer">
      <page-header
        :name="cv.person.name" />
      <div 
        class="main">
        <list
          v-if="cv.education.items"
          :object="cv.education"
          :settings="cv.settings" />
        <list
          v-if="cv.experienceFirstPage.items"
          :object="cv.experienceFirstPage"
          :settings="cv.settings" />
      </div>
      <skills-list 
        class="skills"
        v-if="cv.skills.items"
        :object="cv.skills"
        :settings="cv.settings" />
    </page>
    <page
      :settings="cv.settings"
      :footer="cv.footer">
      <list
        v-if="cv.experienceSecondPage.items"
        :object="cv.experienceSecondPage"
        :settings="cv.settings" />
      <list
        v-if="cv.voluntary.items"
        class="voluntary"
        :object="cv.voluntary"
        :settings="cv.settings" />
    </page>
  </section>
</template>

<script>
import Page from '~/components/Page.vue'
import PageHeader from '~/components/PageHeader.vue'
import CoverletterInformation from '~/components/CoverletterInformation.vue'
import CoverletterText from '~/components/CoverletterText.vue'
import List from '~/components/List.vue'
import SkillsList from '~/components/SkillsList.vue'
import cv from '~/assets/cv.yml'

export default {
  name: 'Cv',
  components: {
    Page,
    PageHeader,
    CoverletterInformation,
    CoverletterText,
    List,
    SkillsList
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
