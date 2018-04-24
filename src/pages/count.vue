<template>
  <div class="count-wrap">
    <i-header title="Count"></i-header>
    <div class="count-item">
      <count-up :start-val="1000" :end-val="100" :duration="3"></count-up>
    </div>

    <div class="count-item">
      <count-up :end-val="99.99" :decimals="2" :duration="3"></count-up>
    </div>

    <div class="count-item">
      <count-up :end-val="4999" :duration="3" :start="goYou" ref="theCount"></count-up>
    </div>

    <div class="btn-wrap">
      <btn text="走你" @click.native="startCount"></btn>
      <btn text="重置" @click.native="resetCount"></btn>
    </div>
    <div class="btn-wrap">
      <btn text="暂停/继续" @click.native="pauseCount"></btn>
      <btn text="更新" @click.native="updateCount"></btn>
    </div>
  </div>
</template>

<script>
  import IHeader from '../components/header/iheader'
  import CountUp from '../components/countUp/countUp'
  import Btn from '../components/btn/btn'

  // countUp 有 开始, 暂停, 重置, 更新 等方法
  export default {
    name: "count",
    data() {
      return {
        goYou: false
      }
    },
    methods: {
      startCount() {
        this.goYou = true
      },
      resetCount() {
        this.goYou = false
        this.$refs.theCount.reset()
      },
      pauseCount() {
        this.$refs.theCount.pauseResume()
      },
      updateCount() {
        this.$refs.theCount.update(9999)
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
  @import "../assets/stylus/default.styl"

  .count-wrap
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    overflow-y auto
    background-color #fff
    .count-item
      padding 20px
      text-align center
      font-size 30px
      color $color-green
    .btn-wrap
      margin-top 30px
      text-align center
</style>
