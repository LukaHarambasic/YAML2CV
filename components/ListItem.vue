<template>
  <li
    v-if="item">
    <div
      v-if="item.date.from || item.date.to || item.location"
      class="information">
      <div
        v-if="item.date.from || item.date.to"
        class="date">
        <div
          v-if="item.date.from"
          v-text="item.date.from"
          class="from" />
        <div
          v-if="item.date.to"
          v-text="item.date.to"
          class="to" />
      </div>
      <div
        v-if="item.location"
        v-text="item.location"
        class="location" />
    </div>
    <div
      v-if="item.title || item.position"
      class="header">
      <h3
        v-if="item.title"
        v-text="item.title"
        class="title" />
      <h4
        v-if="item.position"
        v-text="position"
        class="position" />
    </div>
    <p
      v-if="item.description"
      v-html="item.description"
      :class="{ justify: justifyDescription }"
      class="description" />
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      required: true,
      type: Object
    },
    justifyDescription: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    position() {
      return `(${this.item.position})`
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
