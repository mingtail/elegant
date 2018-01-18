<template>
  <header class="i-header border-bottom-1px">
    <i class="back icon-arrow-left" @click="goBack"></i>{{title}}
  </header>
</template>

<script type="text/javascript">
  export default {
    props: {
      title: String
    },
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"

  .i-header
    position relative
    height 44px
    line-height 44px
    font-size 16px
    text-align center
    color $color-gray
    box-shadow 0 0 8px $color-light-gray
    background-color $color-light-gray-sss
    .back
      position absolute
      left 0
      padding 0 15px
</style>
