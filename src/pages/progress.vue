<template>
  <div class="progress-wrap">
    <i-header title="Progress"></i-header>
    <ul>
      <li class="item">
        <x-circle :percent="percent" :stroke-width="6" :trail-width="6" :stroke-color="strokeColor"><span>{{percent/10}}</span></x-circle>
      </li>
      <li class="item">
        <x-line :percent="percent" :stroke-width="6" :trail-width="6" :stroke-color="strokeColor"></x-line>
      </li>
      <li class="item">
        <x-line :percent="percent" :stroke-width="6" :trail-width="6" :stroke-color="strokeColor" trend="vertical"></x-line>
      </li>
    </ul>

    <div class="btn-wrap">
      <btn text="倒计时" @click.native="decrease"></btn>
      <btn text="随机" @click.native="getRandom"></btn>
    </div>

  </div>
</template>

<script>
  import IHeader from '../components/header/iheader'
  import XCircle from '../components/progress/circle'
  import XLine from '../components/progress/line'
  import Btn from '../components/btn/btn'

  export default {
    name: "x-progress",
    data() {
      return {
        percent: 50,
        strokeColor: '#2ED335',
        countDown: null
      }
    },
    methods: {
      decrease() {
        let self = this
        clearInterval(self.countDown)
        self.countDown = setInterval(() => {
          if(self.percent > 0) {
            self.percent -= 10
          } else {
            clearInterval(self.countDown)
          }
        },1000)
      },
      getRandom() {
        clearInterval(this.countDown)
        const colors = ['#3FC7FA', '#2ED335', '#FE8C6A']
        this.percent = parseInt(Math.random() * 10) * 10
        this.strokeColor = colors[parseInt(Math.random() * 3)]
      }
    },
    components: {
      IHeader,
      XCircle,
      XLine,
      Btn
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .progress-wrap
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    overflow-y auto
    background-color #fff
    .item
      margin 10px auto
      width 100px
      height 100px
      line-height 100px
      text-align center
    .btn-wrap
      margin-top 30px
      text-align center
</style>
