<template>
  <div id="app">
    <header class="app-header border-bottom-1px">
      <img src="./assets/img/logo.png">
    </header>

    <router-link to="/spin" class="link-cell">111</router-link>
    <router-link to="/spin" class="link-cell">222</router-link>
    <router-link to="/spin" class="link-cell">333</router-link>
  </div>
</template>

<script>
  import Cell from './components/cell/cell'

  export default {
    name: 'app'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/stylus/default.styl"

  .app-header {
    width 100%
    background-color $color-light-grey-sss
  }
</style>
