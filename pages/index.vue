<template>
  <section class="index">
    <page
      :logoPath="settings.logoPath"
      :footerLinks="footer">
      <coverletter-header
        :address="person.address"/>
      <coverletter-information
        :title="company.name"
        :department="company.department"
        :name="company.name"
        :address="company.address"
        :contact="company.contact"/>
      <coverletter-text
        :companyName="company.name"
        :personName="person.name"
        :city="person.address.city"
        :manualDate="coverletter.manualDate"
        :greeting="coverletter.greeting"
        :headline="coverletter.headline"
        :paragraphs="coverletter.paragraphs"
        :farewell="coverletter.farewell"
        :addLinesForSignature="settings.addLinesForSignature"/>
    </page>
    <page
      :isFirstCv="true"
      :logoPath="settings.logoPath"
      :footerLinks="footer">
      <segment-header
        :name="person.name"
        :information="person.information"
        :imagePath="settings.imagePath"
        :isImageRound="settings.isImageRound"/>
      <div 
        class="main">
        <segment-list
          v-if="education"
          :title="education.title"
          :segments="education.segments"
          :useTimeline="settings.useTimeline"
          :justifyDescription="settings.justifyDescription"/>
        <segment-list
          v-if="experienceFirstPage"
          :title="experienceFirstPage.title"
          :segments="experienceFirstPage.segments"
          :useTimeline="settings.useTimeline"
          :justifyDescription="settings.justifyDescription"/>
      </div>
      <skills-list 
        class="skills"
        v-if="skills"
        :title="skills.title"
        :lists="skills.lists"
        :showSkillLevel="settings.showSkillLevel"
        :sortSkillsBy="settings.showSkillsBy"
        :maxSkillLevel="settings.maxSkillLevel" />
    </page>
    <page
      :logoPath="settings.logoPath"
      :footerLinks="footer">
      <segment-list
        v-if="experienceSecondPage"
        :title="experienceSecondPage.title"
        :segments="experienceSecondPage.segments"
        :useTimeline="settings.useTimeline"
        :justifyDescription="settings.justifyDescription"/>
      <segment-list
        class="voluntary"
        v-if="voluntary"
        :title="voluntary.title"
        :segments="voluntary.segments"
        :useTimeline="settings.useTimeline"
        :justifyDescription="settings.justifyDescription"/>
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

import settings from '~/content/settings.yml'
import coverletter from '~/content/coverletter.yml'
import company from '~/content/company.yml'
import person from '~/content/person.yml'
import experienceFirstPage from '~/content/experienceFirstPage.yml'
import experienceSecondPage from '~/content/experienceSecondPage.yml'
import education from '~/content/education.yml'
import skills from '~/content/skills.yml'
import voluntary from '~/content/voluntary.yml'
import footer from '~/content/footer.yml'

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
      settings: settings,
      coverletter: coverletter,
      company: company,
      person: person,
      experienceFirstPage: experienceFirstPage,
      experienceSecondPage: experienceSecondPage,
      education: education,
      skills: skills,
      voluntary: voluntary,
      footer: footer
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
