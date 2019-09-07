<template>
  <div class="header border-bottom-1px">
    <i v-if="back" class="icon-back icon-arrow-left i-hover" @click="goBack"></i>
    <span v-if="title!==''">{{title}}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "i-head",
    props: {
      back: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"

  .header
    position relative
    height: 50px;
    line-height: 50px;
    font-size 16px
    text-align center
    color $color-gray
    box-shadow 0 0 8px $color-light-gray
    background-color $color-light-gray-sss
    .icon-back
      position absolute
      left 0
      padding 0 15px
</style>
