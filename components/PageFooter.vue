<template>
  <footer
    :class="{ first: isFirst }">
    <svg
      v-if="showLogo"
      class="logo"
      viewBox="0 0 800 800"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M300,350 L300,203.002107 C300,201.343416 298.658407,200 297.003468,200 L252.996532,200 C251.337379,200 250,201.344089 250,203.002107 L250,396.997893 C250,397.828168 250.33615,398.579447 250.879487,399.12278 C251.42089,399.664906 252.172169,400 253.002107,400 L446.997893,400 C448.656584,400 450,398.658407 450,397.003468 L450,352.996532 C450,351.337379 448.655911,350 446.997893,350 L300,350 Z M500,203.003859 C500,201.344874 501.337379,200 502.996532,200 L547.003468,200 C548.658407,200 550,201.350681 550,203.003859 L550,596.996141 C550,598.655126 548.662621,600 547.003468,600 L502.996532,600 C501.341593,600 500,598.649319 500,596.996141 L500,203.003859 Z M250,452.996307 C250,451.341492 251.337379,450 252.996532,450 L297.003468,450 C298.658407,450 300,451.342577 300,452.996307 L300,597.003693 C300,598.658508 298.662621,600 297.003468,600 L252.996532,600 C251.341593,600 250,598.657423 250,597.003693 L250,452.996307 Z" id="path-1"></path>
        <filter x="-1.0%" y="-0.8%" width="102.0%" height="101.5%" filterUnits="objectBoundingBox" id="filter-2">
          <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.181507553   0 0 0 0 0.180108402   0 0 0 0 0.246014031  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Version2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Final_Color_Dark" transform="translate(-100.000000, -100.000000)">
          <g id="Logo" transform="translate(100.000000, 100.000000)">
            <circle id="Kreis" fill="#E2EBF0" cx="400" cy="400" r="400"></circle>
            <g id="LH">
              <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
              <use fill="#2E2E3E" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <ul v-if="links">
      <li
        v-for="(link, index) in links"
        :key="index">
        <a 
          :href="link.url" 
          :title="link.title"
          v-text="link.title" />
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
        required: true
      },
      showLogo: {
        type: Boolean,
        required: true
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
    border-radius: 0;
    transform: none;
    margin: 0;
  }
  &.first {
    @media screen and (max-width: $desktop) {
      display:none;
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
    margin-top: - ($s * 1.5);
    margin-right: $s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: all 0.7s ease;
    @media print {
      right: $s * 2;
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
        content: "•";
        margin-left: $s/2;
        @media screen and (max-width: $desktop) {
          content: "";
          margin: 0;
        }
      }
      &:last-of-type {
        margin: 0;
        &::after {
          content: "";
          margin: 0;
        }
      }
      a {
        color: $c-secondary;
        transition: all 250ms ease-out;
        text-decoration: none;
        border-bottom: 1px transparent solid;
        &:hover {
          opacity: 0.9;
          border-bottom-color: $c-secondary;
        }
      }
    }
  }
}
/*Created by Luka Harambasic :) Feel free to to what ever you want, but if you are a nice person you leave my name somewhere in the CSS comments :D*/
</style>
