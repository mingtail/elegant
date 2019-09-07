<template>
  <button class="btn">{{text}}</button>
</template>

<script>
  export default {
    name: "btn",
    props: {
      text: {
        type: String,
        default: 'button'
      },
      bColor: {
        type: String,
        default: '#fc9153'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"

  .btn
    width 100px
    height 36px
    font-size 14px
    color #fff
    border-radius 5px
    background-color $color-orange
    &:active
      background-color $color-orange * 0.8
</style>
