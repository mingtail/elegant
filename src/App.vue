<template>
  <div id="app">
    <header class="app-header border-bottom-1px">
      <img src="./assets/img/logo.png" width="32" height="32">
    </header>
    <tab></tab>

    <transition name="move">
      <router-view class="r-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'

  export default {
    name: 'app',
    components: {
      Tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/stylus/default.styl"

  #app
    overflow-x hidden
    .app-header
      padding 10px
      text-align center
      box-shadow 0 0 5px $color-light-grey
      background-color $color-light-grey-sss
    .r-view
      &.move-enter-active, &.move-leave-active
        transition all .2s ease
      &.move-enter, &.move-leave-to
        transform translate3d(100%, 0, 0)
</style>
