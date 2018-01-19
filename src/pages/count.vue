<template>
  <div class="count-wrap">
    <i-header title="Count"></i-header>
    <count-up :start-val="1000" :end-val="100" :duration="1"></count-up>

    <div class="btn-wrap">
      <btn text="开始" @click.native="startCount"></btn>
    </div>
  </div>
</template>

<script>
  import IHeader from '../components/header/iheader'
  import CountUp from '../components/countUp/countUp'
  import Btn from '../components/btn/btn'

  export default {
    name: "count",
    methods: {
      startCount() {
        console.log(1)
      }
    },
    components: {
      IHeader,
      CountUp,
      Btn
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .count-wrap
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    overflow-y auto
    background-color #fff
    .btn-wrap
      margin-top 30px
      text-align center
</style>
