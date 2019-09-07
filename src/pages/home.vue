<template>
  <div class="page page_home">
    <header class="app-header border-bottom-1px">
      <img src="../assets/img/logo.png" width="32" height="32">
    </header>
    <List :list="list"></List>
  </div>
</template>

<script>
  import List from '../components/list/list'

  export default {
    name: "home",
    data() {
      return {
        list: [
          {name: 'Spinner', link: '/spinner'},
          {name: 'CheckList', link: '/checkList'},
          {name: 'Progress', link: '/progress'},
          {name: 'Count', link: '/count'},
          {name: 'RefreshList', link: '/refresh-list'},
          {name: 'BScroll', link: '/bscroll'},
        ],
      }
    },
    components: {
      List
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/variable.styl"

  .page_home
    .app-header
      padding 10px
      text-align center
      box-shadow 0 0 5px $color-light-gray
      background-color $color-wx-gray
</style>