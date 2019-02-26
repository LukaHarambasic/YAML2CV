<template>
  <section class="container-in">
    <lh-cv-page
      :isFirst="true">
      <LhCvHeader
        :name="cv.name" />
      <div class="main">
        <LhCvList
          :title="'Experience'"
          :items="cv.experience" />
        <LhCvList
          :title="'Education'"
          :items="cv.education" />
      </div>
      <aside class="skills">
        <h2>Skills</h2>
        <LhCvSkills
          :title="'Development'"
          :items="cv.skills.development" />
        <LhCvSkills
          :title="'Software'"
          :items="cv.skills.software" />
        <LhCvSkills
          :title="'Other'"
          :items="cv.skills.others" />
        <LhCvSkills
          :title="'Languages'"
          :items="cv.skills.languages" />
      </aside>
      <LhCvFooter
        :links="cv.footer"
        :showLogo="cv.settings.showLogo" />
    </lh-cv-page>
    <lh-cv-page>
      <LhCvList
        :title="'Voluntary Work'"
        :items="cv.voluntary" />
      <LhCvFooter
        :links="cv.footer"
        :showLogo="cv.settings.showLogo" />
    </lh-cv-page>
  </section>
</template>

<script>
import LhCvPage from '~/components/LhCvPage.vue'
import LhCvList from '~/components/LhCvList.vue'
import LhCvSkills from '~/components/LhCvSkills.vue'
import LhCvHeader from '~/components/LhCvHeader.vue'
import LhCvFooter from '~/components/LhCvFooter.vue'
import cv from '~/assets/cv.yml'

export default {
  name: 'Cv',
  components: {
    LhCvPage,
    LhCvList,
    LhCvSkills,
    LhCvHeader,
    LhCvFooter
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
