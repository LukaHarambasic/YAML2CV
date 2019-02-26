<template>
  <li>
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
    <p
      v-if="item.description"
      v-text="item.description"
      class="description" />
  </li>
</template>

<script>
export default {
  name: 'LhCvListItem',
  props: {
    item: {
      required: true,
      type: Object
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
  margin: 0 0 $s-s 0;
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
      margin: 0;
      display: inline-block;
      font-weight: 600;
      font-size: $fs;
    }
    .position {
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
    margin: 0;
  }
}
</style>
