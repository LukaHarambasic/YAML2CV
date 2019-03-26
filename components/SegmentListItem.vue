<template>
  <li>
    <div
      class="information"
      v-if="date.from || date.to || location">
      <div
        class="date"
        v-if="date.from || date.to">
        <div
          class="from"
          v-if="date.from"
          v-text="date.from"/>
        <div
          class="to"
          v-if="date.to"
          v-text="date.to"/>
      </div>
      <div
        class="location"
        v-if="location"
        v-text="location"/>
    </div>
    <div
      class="header"
      v-if="title || position">
      <h3
        class="title"
        v-if="title"
        v-text="title"/>
      <h4
        class="position"
        v-if="position"
        v-text="`(${position})`"/>
    </div>
    <p
      class="description"
      v-if="description"
      v-html="description"
      :class="{ justify: justifyDescription }"/>
  </li>
</template>

<script>
export default {
  name: 'SegmentListItem',
  props: {
    title: {
      default: '',
      type: String
    },
    description: {
      default: '',
      type: String
    },
    position: {
      default: '',
      type: String
    },
    location: {
      default: '',
      type: String
    },
    date: {
      default: null,
      type: Object,
      validator: (date) => {
        return date.hasOwnProperty('to') && date.hasOwnProperty('from')
      }
    },
    justifyDescription: {
      default: false,
      type: Boolean
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 0 0;
  padding: 0 0 $s-s 0;
  text-align: left;
  width: 100%;
  &:last-of-type {
    margin: 0;
  }
  .information,
  .title,
  .position,
  .description {
    display: inline-block;
  }
  .header {
    width: 100%;
    margin: 0 0 0 0;
    .title,
    .position {
      color: $c-font-headline;
      margin: 0;
      display: inline-block;
      font-weight: 600;
      font-size: $fs;
    }
  }
  .information {
    display: flex;
    flex-flow: row nowrap;
    font-size: $fs-s;
    font-weight: 400;
    margin: 0 0 0 0;
    .date {
      display: flex;
      flex-flow: row nowrap;
      .from {
        margin: 0 $s-xxs 0 0;
        &::after {
          content: "-";
          margin: 0 0 0 $s-xxs;
        }
      }
      .to {
        margin: 0 $s-xxs 0 0;
        &::after {
          content: "•";
          margin: 0 0 0 $s-xxs;
        }
      }
    }
  }
  .description {
    margin: 0.2rem 0 0 0;
    &.justify {
      text-align: justify;
    }
  }
}
</style>
