<template>
  <footer
    v-if="links"
    :class="{ first: isFirst }">
    <img 
      v-if="logoPath"
      :src="logoPath"
      class="logo"
    >
    <ul 
      v-if="links">
      <li
        v-for="(link, index) in links"
        :key="index">
        <a 
          :href="link.url" 
          :title="link.title"
          v-text="link.title"
        />
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    links: {
      type: Array,
      default: null
    },
    logoPath: {
      type: String,
      default: ''
    },
    isFirst: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: $c-primary;
  color: $c-secondary;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: $s-s 0;
  border-radius: 0 0 $radius $radius;
  transform: translateY(100%);
  @media print {
    position: fixed;
    border-radius: 0;
    transform: none;
    margin: 0;
    padding: $s-s 0 $s 0;
  }
  &.first {
    @media screen and (max-width: $desktop) {
      display: none;
    }
  }
  @media screen and (max-width: $desktop) {
    width: 100%;
    height: auto;
    padding: $s;
    margin: 0 0 $s 0;
  }
  .logo {
    position: absolute;
    top: 0;
    right: 0;
    width: $s * 3;
    height: $s * 3;
    margin-top: -($s * 1.5);
    margin-right: $s * 3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: all 0.7s ease;
    @media print {
      right: 0;
    }
    &:hover {
      transform: rotate(360deg);
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-self: center;
    @media screen and (max-width: $desktop) {
      flex-flow: column nowrap;
    }
    li {
      margin-right: $s/2;
      @media screen and (max-width: $desktop) {
        margin: 0;
      }
      &::after {
        content: '•';
        margin-left: $s/2;
        @media screen and (max-width: $desktop) {
          content: '';
          margin: 0;
        }
      }
      &:last-of-type {
        margin: 0;
        &::after {
          content: '';
          margin: 0;
        }
      }
      a {
        color: $c-secondary;
        transition: all 250ms ease-out;
        text-decoration: none;
        border-bottom: 1px transparent solid;
        &:hover {
          border-bottom-color: $c-secondary;
        }
      }
    }
  }
}
/*Created by Luka Harambasic :) Feel free to to what ever you want, but if you are a nice person you leave my name somewhere in the CSS comments :D*/
</style>
