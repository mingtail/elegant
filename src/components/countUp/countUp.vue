<template>
  <span>{{startVal}}</span>
</template>
<script>
  import CountUp from 'countup.js'

  export default {
    name: 'count-up',
    mounted () {
      this.$nextTick(() => {
        this._countup = new CountUp(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
        if (this.start) {
          this._countup.start()
        }
      })
    },
    methods: {
      startCount() {
        this._countup.start()
      },
      reset() {
        this._countup.reset()
      },
      pauseResume() {
        this._countup.pauseResume()
      },
      // 直接调用update函数更新。 也可以直接更新数据, 通过watch开触发update函数
      update(num) {
        this._countup.update(num)
      }
    },
    props: {
      start: {
        type: Boolean,
        default: true
      },
      startVal: {
        type: Number,
        default: 0
      },
      endVal: {
        type: Number,
        required: true
      },
      // number of decimal places in number
      decimals: {
        type: Number,
        default: 0
      },
      // duration in seconds
      duration: {
        type: Number,
        default: 2
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    watch: {
      start (val) {
        if (val) {
          this._countup.start()
        }
      },
      endVal (val) {
        this._countup.update(val)
      }
    }
  }
</script>
