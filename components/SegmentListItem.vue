<template>
  <li>
    <div
      v-if="date.from || date.to || location"
      class="information">
      <div
        v-if="date.from || date.to"
        class="date">
        <div
          v-if="date.from"
          class="from"
          v-text="date.from"
        />
        <div
          v-if="date.to"
          class="to"
          v-text="date.to"
        />
      </div>
      <div
        v-if="location"
        class="location"
        v-text="location"
      />
    </div>
    <div
      v-if="title || position"
      class="header">
      <h3
        v-if="title"
        class="title"
        v-text="title"
      />
      <h4
        v-if="position"
        class="position"
        v-text="`(${position})`"
      />
    </div>
    <p
      v-if="description"
      :class="{ justify: justifyDescription }"
      class="description"
      v-html="description"
    />
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
      validator: date => {
        return date.hasOwnProperty('to') && date.hasOwnProperty('from')
      }
    },
    justifyDescription: {
      default: false,
      type: Boolean
    }
  }
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
          content: '-';
          margin: 0 0 0 $s-xxs;
        }
      }
      .to {
        margin: 0 $s-xxs 0 0;
        &::after {
          content: '•';
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
