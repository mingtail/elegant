<template>
  <section class="tab">
    <ul class="tab-list">
      <li class="tab-item border-bottom-1px">
        <router-link to="/spin" class="cell">Spin
          <i class="icon-arrow-right"></i></router-link>
      </li>
      <li class="tab-item border-bottom-1px">
        <router-link to="/checkbox" class="cell">CheckBox
          <i class="icon-arrow-right"></i></router-link>
      </li>
    </ul>
  </section>
</template>

<script type="text/javascript">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"

  .tab-list
    padding 0 10px
    .tab-item
      .cell
        position relative
        display block
        padding 15px
        font-size 14px
        color $color-grey
        & > i
          position absolute
          right 0
          padding 0 5px
</style>
