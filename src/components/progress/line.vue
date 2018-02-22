<template>
  <div class="line">
    <svg :width="getWidth" :height="getHeight" :viewBox="viewBoxString">
      <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="trailColor" :stroke-width="trailWidth || strokeWidth" fill-opacity="0"/>
      <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="strokeColor" :stroke-width="strokeWidth" :style="pathStyle" fill-opacity="0"/>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "x-line",
    props: {
      strokeWidth: {
        type: Number,
        default: 1
      },
      strokeColor: {
        type: String,
        default: '#2ed335'
      },
      trailWidth: {
        type: Number,
        default: 1
      },
      trailColor: {
        type: String,
        default: '#d9d9d9'
      },
      percent: {
        type: Number,
        default: 0
      },
      strokeLinecap: {
        type: String,
        default: 'round'
      },
      trend: {
        type: String,
        default: 'horizontal' // 支持水平和垂直方向
        // default: 'vertical'
      }
    },
    computed: {
      getWidth() {
        return this.trend === 'horizontal' ? 100 : this.strokeWidth
      },
      getHeight() {
        return this.trend === 'horizontal' ? this.strokeWidth : 100
      },
      viewBoxString() {
        return this.trend === 'horizontal' ? `0 0 100 ${this.strokeWidth}` : `0 0 ${this.strokeWidth} 100`
      },
      center() {
        return this.strokeWidth / 2
      },
      right() {
        return 100 - (this.strokeWidth / 2)
      },
      pathString() {
        return this.trend === 'horizontal' ?
          `M ${this.strokeLinecap === 'round' ? this.center : 0},${this.center}
           L ${this.strokeLinecap === 'round' ? this.right : 100},${this.center}` :
          `M ${this.center},${this.strokeLinecap === 'round' ? this.right : 100}
           L ${this.center},${this.strokeLinecap === 'round' ? this.center : 0}`
      },
      pathStyle() {
        return {
          strokeDasharray: '100px, 100px',
          strokeDashoffset: `${(100 - this.percent)}px`,
          transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear',
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
  }
</style>
