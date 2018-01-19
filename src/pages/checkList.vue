<template>
  <div class="check-box">
    <i-header title="CheckList"></i-header>
    <ul class="check-list">
      <li v-for="(item, index) in list" class="check-item border-bottom-1px">
        <check-cell :item="item" :index="index"></check-cell>
      </li>
    </ul>

    <div class="btn-wrap">
      <btn text="显示加载" @click.native="showLoad"></btn>
    </div>
  </div>
</template>

<script type="text/javascript">
  import IHeader from '../components/header/iheader'
  import CheckCell from '../components/checkCell/checkCell'
  import Btn from '../components/btn/btn'

  export default {
    data() {
      return {
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
      CheckCell,
      Btn
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .check-box
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff
    .check-list
      padding 10px 10px 20px
    .btn-wrap
      text-align center
</style>
