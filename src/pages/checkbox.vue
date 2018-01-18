<template>
  <div class="check-box">
    <i-header :title="title"></i-header>
    <ul class="check-list">
      <li v-for="(item, index) in list" class="check-item border-bottom-1px">
        <check-cell :item="item" :index="index"></check-cell>
      </li>
    </ul>

    <div class="btn-wrap">
      <button class="a-btn" @click="showLoad">显示加载</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import IHeader from '../components/header/iheader'
  import CheckCell from '../components/checkCell/checkCell'

  export default {
    data() {
      return {
        title: 'CheckBox',
        list: [
          {content: '吃饭', isChecked: false},
          {content: '睡觉', isChecked: true},
          {content: '打豆豆', isChecked: false}
        ]
      }
    },
    methods: {
      showLoad() {
        this.$load.show();
      }
    },
    components: {
      IHeader,
      CheckCell
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/default.styl"

  .check-box
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff
    .check-list
      padding 10px 10px 0
    .btn-wrap
      margin-top 20px
      text-align center
      .a-btn
        width 100px
        height 36px
        color #fff
        border-radius 5px
        background-color $color-orange
        &:active
          background-color $color-orange * 0.8
</style>
