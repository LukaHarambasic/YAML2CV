<template>
  <section class="container-in">
    <lh-cv-page
      :isFirst="true"
      :settings="settings">
      <lh-cv-header
        :name="cv.name" />
      <div class="main">
        <lh-cv-list
          :title="'Education'"
          :items="cv.education"
          :settings="cv.settings" />
        <lh-cv-list
          :title="'Experience'"
          :items="cv.experienceFirstPage"
          :settings="cv.settings" />
      </div>
      <aside class="skills">
        <h2>Skills</h2>
        <lh-cv-skills
          :title="'Development'"
          :items="cv.skills.development" />
        <lh-cv-skills
          :title="'Software'"
          :items="cv.skills.software" />
        <lh-cv-skills
          :title="'Other'"
          :items="cv.skills.others" />
        <lh-cv-skills
          :title="'Languages'"
          :items="cv.skills.languages" />
      </aside>
    </lh-cv-page>
    <lh-cv-page
      :settings="cv.settings">
      <lh-cv-list
        v-if="cv.experienceSecondPage"
        :title="''"
        :items="cv.experienceSecondPage"
        :settings="cv.settings" />
      <lh-cv-list
        :title="'Voluntary Work'"
        :items="cv.voluntary"
        :settings="cv.settings" />
    </lh-cv-page>
  </section>
</template>

<script>
import LhCvPage from '~/components/LhCvPage.vue'
import LhCvList from '~/components/LhCvList.vue'
import LhCvSkills from '~/components/LhCvSkills.vue'
import LhCvHeader from '~/components/LhCvHeader.vue'
import cv from '~/assets/cv.yml'

export default {
  name: 'Cv',
  components: {
    LhCvPage,
    LhCvList,
    LhCvSkills,
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
.main {
  width: 65%;
}

.skills {
  width: 30%;

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
}
</style>
