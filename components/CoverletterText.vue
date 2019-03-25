<template>
  <section>
    <div
      class="locationDate">
      <span
        class="location"
        v-if="person.address"
        v-text="person.address.city"/>
      <span
        class="date"
        v-text="today"/>
    </div>
    <h2
      class="headline"
      v-if="coverletter.headline"
      v-text="coverletter.headline"/>
    <div
      class="welcome">
      <span
        class="greeting"
        v-if="coverletter.greeting"
        v-text="coverletter.greeting"/>
      <span
        class="speech"
        v-if="company.name"
        v-text="company.name.speech"/>
      <span
        class="lastname"
        v-if="company.name"
        v-text="company.name.last"/>
    </div>
    <div
      class="text">
      <p 
        v-for="(paragraph, index) in coverletter.paragraphs" 
        :key="index"
        v-text="paragraph" />
    </div> 
    <div>
      <span
        class="farewell"
        v-if="coverletter.farewell"
        v-text="coverletter.farewell"/>
    </div>
    <div
      class="name">
      <span
        class="firstname"
        v-if="person.name"
        v-text="person.name.first"/>
      <span
      class="lastname"
        v-if="person.name"
        v-text="person.name.last"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CoverletterText',
    props: {
      person: {
        type: Object,
        required: true
      },
      company: {
        type: Object,
        required: true
      },
      coverletter: {
        type: Object,
        required: true
      }
    },
    computed: {
      today() {
        const today = new Date()
        let day = today.getDay()
        let month = today.getMonth() + 1
        let year = today.getFullYear()
        if (day < 10) {
          day = '0' + day
        } 
        if (month < 10) {
          month = '0' + month
        } 
        return `${day}.${month}.${year}`
      }
    }
  }
</script>

<style lang="scss" scoped>
section {
  .locationDate {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    .location {
      &::after {
        content: ',';
        margin: 0 $s-xxs 0 0;
      }
    }
  }
  .headline {
    font-size: $fs-m;
    margin: $s-s 0 $s-xl 0;
  }
  .welcome {
    margin: 0 0 $s 0;
    .lastname {
      &::after {
        content: ',';
      }
    }
  }
  .text {
    margin: 0 0 $s 0;
  }
  .farewell {
    &::after {
      content: ',';
    }
  }
}
</style>
