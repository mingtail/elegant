<template>
  <div class="line" :style="getLineStyle">
    <div class="percent" :class="{vertical : trend === 'vertical'}" :style="getPercentStyle"></div>
  </div>
</template>

<script>
  export default {
    name: "x-line",
    props: {
      size: {
        type: Number,
        default: 6
      },
      trailColor: {
        type: String,
        default: '#fff'
      },
      strokeColor: {
        type: String,
        default: '#2ed335'
      },
      percent: {
        type: Number,
        default: 0
      },
      trend: {
        type: String,
        default: 'horizontal' // 支持水平和垂直方向
        // default: 'vertical'
      }
    },
    computed: {
      getLineStyle() {
        return {
          'border-radius': `${this.size/2}px`,
          'background': this.trailColor
        }
      },
      getPercentStyle() {
        return {
          'width': this.trend === 'horizontal' ? `${this.percent}%` : `${this.size}px`,
          'height': this.trend === 'horizontal' ? `${this.size}px` : `${this.percent}%`,
          'background': this.strokeColor,
          'border-radius': `${this.size/2}px`
        }
      }
    }
  }
</script>

<style>

  .line {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .percent {
    transition: all 0.3s ease;
  }
  .vertical {
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
