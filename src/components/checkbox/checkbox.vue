<template>
  <div class="check-box">
    <i-header :title="title"></i-header>
    <ul class="check-list">
      <li class="check-item">

      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import IHeader from '../header/iheader'

  export default {
    data() {
      return {
        title: 'CheckBox'
      }
    },
    components: {
      IHeader
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"

  .check-box
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff

</style>
