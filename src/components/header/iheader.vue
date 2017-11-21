<template>
  <header class="i-header border-bottom-1px"><i class=""></i>{{title}}</header>
</template>

<script type="text/javascript">
  export default {
    props: {
      title: String
    },
    data() {},
    methods: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"

  .i-header
    height 44px
    line-height 44px
    font-size 16px
    text-align center
    color $color-grey
</style>
