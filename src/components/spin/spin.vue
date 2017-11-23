<template>
  <div class="spin-container">
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

    </ul>
  </div>
</template>

<script type="text/javascript">
  import IHeader from '../header/iheader'

  export default {
    data() {
      return {
        title: 'Spin',
        size: 'size-40'
      }
    },
    computed: {
      getSize() {
        return this.size
      }
    },
    components: {
      IHeader
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"
  @import "./spin.styl"

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
          /*position absolute*/
          border-radius 50%
          border 4px solid transparent
          animation rotate-simple 0.8s infinite linear
        .spinner
          position relative
          .bounce-1st, .bounce-2nd, .bounce-3rd, .bounce-4th
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


</style>
