<template>
  <div class="spin-container" @mousedown="showCircle($event)">
    <i-header :title="title"></i-header>
    <ul class="spin-list">

      <li class="spin-item border-bottom-1px">
        <span class="item-name">Double-Bounce</span>
        <div class="spinner" :class="getSize">
          <div class="bounce-1st"></div>
          <div class="bounce-2nd"></div>
        </div>
      </li>

      <li class="spin-item border-bottom-1px">
        <span class="item-name">Bounce1</span>
        <div class="spinner" :class="getSize">
          <div class="bounce-3rd"></div>
        </div>
      </li>

      <li class="spin-item border-bottom-1px">
        <span class="item-name">Bounce2</span>
        <div class="spinner" :class="getSize">
          <div class="bounce-4th"></div>
        </div>
      </li>

      <li class="spin-item border-bottom-1px">
        <span class="item-name">Snake1</span>
        <div class="snake-simple" :class="getSize"></div>
      </li>

      <li class="spin-item border-bottom-1px">
        <span class="item-name">Snake2</span>
        <div class="spinner" :class="getSize">
          <svg viewBox="25 25 50 50" class="circular">
            <circle cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" class="path"></circle>
          </svg>
        </div>
      </li>

      <li class="spin-item border-bottom-1px">
        <span class="item-name">ripple</span>
        <div class="spinner spin-color" :class="getSize">
          <svg viewBox="0 0 64 64">
            <g fill="none" fill-rule="evenodd" stroke-width="3">
              <circle cx="32" cy="32" r="23.7813">
                <animate attributeName="r" begin="0s" dur="2s" values="0;24" keyTimes="0;1" keySplines="0.1,0.2,0.3,1"
                         calcMode="spline" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" begin="0s" dur="2s" values=".2;1;.2;0"
                         repeatCount="indefinite"></animate>
              </circle>
              <circle cx="32" cy="32" r="16.9226">
                <animate attributeName="r" begin="-1s" dur="2s" values="0;24" keyTimes="0;1" keySplines="0.1,0.2,0.3,1"
                         calcMode="spline" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" begin="-1s" dur="2s" values=".2;1;.2;0"
                         repeatCount="indefinite"></animate>
              </circle>
            </g>
          </svg>
        </div>
      </li>

      <li class="spin-item border-bottom-1px">
        <span class="item-name">dots</span>
        <div class="spinner spin-color" :class="getSize">
          <svg viewBox="0 0 64 64">
            <g>
              <circle cx="16" cy="32" stroke-width="0" r="5.35374">
                <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5"
                         repeatCount="indefinite"></animate>
                <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
              </circle>
              <circle cx="32" cy="32" stroke-width="0" r="5.64626">
                <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5"
                         repeatCount="indefinite"></animate>
                <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
              </circle>
              <circle cx="48" cy="32" stroke-width="0" r="4.64626">
                <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6"
                         repeatCount="indefinite"></animate>
                <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
              </circle>
            </g>
          </svg>
        </div>
      </li>


    </ul>

    <reflection :size="40" ref="reflection"></reflection>

  </div>
</template>

<script type="text/javascript">
  import IHeader from '../components/header/iheader'
  import Reflection from '../components/spinner/reflection'

  export default {
    data() {
      return {
        title: 'Spinner',
        size: 40,
        isShow: false,
        timerIndex: 0
      }
    },
    computed: {
      getSize() {
        return `size-${this.size}`
      }
    },
    methods: {
      showCircle(e) {
        this.$refs.reflection.showReflection(e.pageX, e.pageY)
      }
    },
    components: {
      IHeader,
      Reflection
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/default.styl"
  @import "../components/spinner/spinner.styl"

  .spin-container
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff
    .spin-list
      padding 0 10px
      .spin-item
        position relative
        display flex
        padding 10px 20px
        .item-name
          flex 1
          align-self center
          font-size 16px
        .size-40
          flex 0 0 40px
          width 40px
          height 40px
        .snake-simple
          border-radius 50%
          border 4px solid transparent
          animation rotate-simple 0.8s infinite linear
        .spinner
          position relative
          .bounce-1st, .bounce-2nd, .bounce-3rd, .bounce-4th, .bounce-reflection
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            border-radius 50%
            opacity 0.6
            background-color $color-spin-blue
          .bounce-1st, .bounce-2nd
            animation double-bounce 2.0s infinite ease-in-out
          .bounce-2nd
            animation-delay -1.0s
          .bounce-3rd
            animation single-bounce 1.0s infinite ease
          .bounce-4th
            animation single-bounce 1.0s infinite ease-in-out
        .spin-color
          stroke $color-spin-green
          fill $color-spin-green

</style>
