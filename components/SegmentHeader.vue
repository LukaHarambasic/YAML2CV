<template>
  <header>
    <img 
      v-if="imagePath"
      :class="{ round: isImageRound }"
      :src="imagePath">
    <div 
      v-if="name"
      class="nameInformation">
      <h1>
        <span 
          v-text="name.first"
        />
        <br>
        <span 
          v-text="name.last"
        />
      </h1>
      <div 
        v-if="information"
        class="information">
        <span 
          v-for="(point, index) in information" 
          :key="index" 
          v-text="point"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SegmentHeader',
  props: {
    name: {
      default: null,
      type: Object,
      validator: name => {
        return name.hasOwnProperty('first') && name.hasOwnProperty('last')
      }
    },
    information: {
      default: null,
      type: Array
    },
    imagePath: {
      default: '',
      type: String
    },
    isImageRound: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 20%;
  margin: 0 0 ($s * 2) 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  @media screen and (max-width: $desktop) {
    flex-flow: column nowrap;
    margin: 0;
  }
  img {
    max-height: 100%;
    border-radius: $radius 0 0 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: $desktop) {
      border-radius: $radius $radius 0 0;
      margin: $s-xl 0 0 0;
      max-height: auto;
      max-width: 80%;
    }
    @media print {
      max-height: 12rem;
    }
    &.round {
      border-radius: 50%;
    }
  }
  .nameInformation {
    display: flex;
    flex-flow: column nowrap;
    align-content: stretch;
    margin: 0 0 0 $s-xl;
    h1 {
      color: $c-white;
      font-size: $fs-xl;
      line-height: 1;
      margin: 0;
      height: 80%;
      @media screen and (max-width: $desktop) {
        font-size: $fs-l * 1.5;
        margin: $s 0 $s 0;
      }
    }
    .information {
      height: 20%;
      display: flex;
      align-items: center;
      > span {
        position: relative;
        margin: 0 $s-l 0 0;
        &::after {
          content: '';
          position: absolute;
          right: -$s;
          top: 0.37rem;
          width: $s-xs;
          height: $s-xs;
          background: $c-secondary;
          border-radius: 50%;
        }
        &:last-of-type {
          margin: 0 0 0 0;
          &::after {
            content: '';
            display: none;
          }
        }
      }
    }
  }
}
</style>
