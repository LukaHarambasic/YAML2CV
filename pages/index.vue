<template>
  <section class="container-in">
    <lh-cv-page
      :isFirst="true">
      <header class="header">
        <img src="../static/profile.jpg" />
        <h1>
          <span v-text="cv.name.last" /><br/>
          <span v-text="cv.name.first" /></h1>
      </header>
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
          :title="'Others'"
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
import LhCvFooter from '~/components/LhCvFooter.vue'
import cv from '~/assets/cv.yml'

export default {
  name: 'Cv',
  components: {
    LhCvPage,
    LhCvList,
    LhCvSkills,
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
.header {
  background: $c-white;
  /*box-shadow: 0px 0px 10px $c-primary-shadow;*/
  border-radius: 4px;
  width: 100%;
  height: 20%;
  margin: 0 0 ($s * 2) 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  img {
    max-height: 100%;
    border-radius: 4px 0 0 4px;
  }

  h1 {
    color: $c-primary;
    font-size: 4rem;
    margin: $s 0 0 $s-xl;
    width: 100%;
    line-height: 1;
  }
}

.main {
  width: 65%;
}

.skills {
  width: 30%;
  h2 {
    color: $c-primary;
    text-align: left;
    margin: 0 0 $s-xs 0;
    font-weight: 600;
  }
}
</style>
