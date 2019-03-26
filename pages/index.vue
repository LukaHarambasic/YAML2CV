<template>
  <section class="index">
    <page
      :settings="cv.settings"
      :footer="cv.footer">
      <coverletter-header
        :address="cv.person.address" />
      <coverletter-information
        :information="cv.company" />
      <coverletter-text
        :person="cv.person"
        :company="cv.company"
        :coverletter="cv.coverletter"
        :settings="cv.settings" />
    </page>
    <page
      :isFirstCv="true"
      :settings="cv.settings"
      :footer="cv.footer">
      <segment-header
        :name="cv.person.name"
        :information="cv.person.information"
        :settings="cv.settings" />
      <div 
        class="main">
        <segment-list
          v-if="cv.education.items"
          :object="cv.education"
          :settings="cv.settings" />
        <segment-list
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
      <segment-list
        v-if="cv.experienceSecondPage.items"
        :object="cv.experienceSecondPage"
        :settings="cv.settings" />
      <segment-list
        v-if="cv.voluntary.items"
        class="voluntary"
        :object="cv.voluntary"
        :settings="cv.settings" />
    </page>
  </section>
</template>

<script>
import Page from '~/components/Page.vue'
import CoverletterHeader from '~/components/CoverletterHeader.vue'
import CoverletterInformation from '~/components/CoverletterInformation.vue'
import CoverletterText from '~/components/CoverletterText.vue'
import SegmentHeader from '~/components/SegmentHeader.vue'
import SegmentList from '~/components/SegmentList.vue'
import SkillsList from '~/components/SkillsList.vue'
import cv from '~/assets/cv.yml'

/* TODO: Change all props from required to default -> so flatten them -> google */

export default {
  name: 'Cv',
  components: {
    Page,
    CoverletterHeader,
    CoverletterInformation,
    CoverletterText,
    SegmentHeader,
    SegmentList,
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
.index {
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
