<template>
  <section class="tab">
    <ul class="tab-list">
      <li v-for="(item, index) in list" :key="index" class="tab-item border-bottom-1px">
        <router-link :to="item.link" class="cell">
          {{item.name}}
          <i v-if="item.link != ''" class="icon-arrow-right"></i>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script type="text/javascript">
  export default {
    name: 'list',
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"

  .tab-list
    padding 0 10px
    .tab-item
      .cell
        position relative
        display block
        padding 15px
        font-size 14px
        color $color-gray
        & > i
          position absolute
          right 0
          padding 0 5px
</style>
