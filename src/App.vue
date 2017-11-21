<template>
  <div id="app">
    <header class="app-header border-bottom-1px">
      <img src="./assets/img/logo.png" width="64" height="64">
    </header>
    <tab></tab>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

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
    .app-header
      padding 10px
      text-align center
      box-shadow 0 0 5px $color-light-grey
      background-color $color-light-grey-sss

</style>
