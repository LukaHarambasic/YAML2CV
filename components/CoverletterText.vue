<template>
  <section>
    <div
      class="locationDate">
      <span
        v-if="city"
        class="location"
        v-text="city"
      />
      <span
        v-if="date"
        class="date"
        v-text="date"
      />
    </div>
    <h2
      v-if="headline"
      class="headline"
      v-text="headline"
    />
    <div
      class="welcome">
      <span 
        v-for="(item, key, index) in companyName"
        :key="index"
        :class="key"
        v-text="item"
      />
    </div>
    <div
      class="text">
      <p 
        v-for="(paragraph, index) in paragraphs" 
        :key="index"
        v-html="paragraph"
      />
    </div> 
    <div
      :class="{ signatureLines: addLinesForSignature }">
      <span
        v-if="farewell"
        class="farewell"
        v-text="farewell"
      />
    </div>
    <div
      class="name">
      <span
        v-if="personName"
        class="firstname"
        v-text="personName.first"
      />
      <span
        v-if="personName"
        class="lastname"
        v-text="personName.last"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoverletterText',
  props: {
    companyName: {
      default: null,
      type: Object,
      validator: value => {
        const props = ['speech', 'first', 'last']
        return props.every(key => key in value)
      }
    },
    personName: {
      default: null,
      type: Object,
      validator: value => {
        const props = ['first', 'last']
        return props.every(key => key in value)
      }
    },
    city: {
      default: '',
      type: String
    },
    manualDate: {
      default: '',
      type: String
    },
    greeting: {
      default: '',
      type: String
    },
    headline: {
      default: '',
      type: String
    },
    paragraphs: {
      default: null,
      type: Array
    },
    farewell: {
      default: '',
      type: String
    },
    addLinesForSignature: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    date() {
      if (!this.manualDate) {
        const today = new Date()
        let day = today.getDate()
        let month = today.getMonth() + 1
        let year = today.getFullYear()
        if (day < 10) {
          day = '0' + day
        }
        if (month < 10) {
          month = '0' + month
        }
        return `${day}.${month}.${year}`
      } else {
        return this.manualDate
      }
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
    color: $c-font-headline;
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

  .signatureLines {
    margin: 0 0 ($s * 3) 0;
  }
}
</style>
