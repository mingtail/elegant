<template>
  <transition name="slide">
    <div class="spin">
      <i-header :title="title"></i-header>
      <ul class="spin-list">
        <li class="spin-item">

        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/javascript">
  import IHeader from '../header/iheader'

  export default {
    data() {
      return {
        title: 'Spin'
      }
    },
    components: {
      IHeader
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"

  .spin
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff
</style>
