<template>
  <div class="m-refresh" :style="refreshStyle" :class="refreshClass"  v-show="y>5">
    <svg v-show="!refreshing && draging" viewBox="0 0 24 24" class="m-refresh-icon" :style="circularStyle">
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
    </svg>

    <span v-show="refreshing" class="an-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" class="path"></circle>
      </svg>
    </span>
  </div>
</template>

<script>
  import Drag from '../../assets/api/drag'
  import * as domUtil from '../../assets/api/domUtil'

  const LENGTH = 130 // 下拉最大长度
  const INITY = -68  // 初始化Y轴位置
  export default {
    name: 'refresh',
    props: {
      refreshing: {
        type: Boolean,
        default: false
      },
      trigger: {}
    },
    data () {
      return {
        y: 0,
        draging: false,
        state: 'pending'
      }
    },
    computed: {
      refreshStyle () {
        let style = {}
        if (!this.refreshing && this.draging) {
          let translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) '
          style['-webkit-transform'] = style['transform'] = translate3d
        }
        return style
      },
      circularStyle () {
        let style = {}
        if (!this.refreshing && this.draging) {
          let percentage = this.y / LENGTH
          let rotate = 'rotate(' + (360 * percentage) + 'deg)'
          let opacity = this.y / Math.abs(INITY)
          style['-webkit-transform'] = style['transform'] = rotate
          style['opacity'] = opacity
        }
        return style
      },
      refreshClass () {
        let classNames = []
        switch (this.state) {
          case 'pending':
            break
          case 'ready':
            classNames.push('m-refresh-noshow')
            break
          case 'dragStart':
            classNames.push('m-refresh--hide')
            break
          case 'dragAnimate':
            classNames.push('m-refresh-animate')
            classNames.push('m-refresh-hide')
            break
          case 'refreshAnimate':
            classNames.push('m-refresh-animate')
            classNames.push('m-refresh-noshow')
            break
        }
        if (this.refreshing) classNames.push('m-refresh-refreshing')
        return classNames
      }
    },
    mounted () {
      this.bindDrag()
    },
    beforeDestory () {
      this.unbindDrag()
    },
    methods: {
      clearState () {
        this.state = 'ready'
        this.draging = false
        this.y = 0
      },
      getScrollEventTarget (element) {
        let currentNode = element
        while (currentNode && currentNode.tagName !== 'HTML' &&
        currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
          }
          currentNode = currentNode.parentNode
        }
        return window
      },
      getScrollTop (element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop
        }
      },
      bindDrag () {
        if (!this.trigger) return
        const drager = this.drager = new Drag(this.trigger)
        this.state = 'ready'
        drager.start(() => {
          if (this.refreshing) return
          this.state = 'dragStart'
          const scrollTop = this.getScrollTop(this.getScrollEventTarget(this.$el))
          if (scrollTop === 0) this.draging = true
        }).drag((pos, event) => {
          const scrollTop = this.getScrollTop(this.getScrollEventTarget(this.$el))
          if (pos.y < 5 || this.refreshing || scrollTop !== 0) return // 消除误差

          if (scrollTop === 0 && !this.draging) {
            this.draging = true
            drager.reset(event)
          }

          if (this.draging && pos.y > 0) {
            event.preventDefault()
            event.stopPropagation()
          }

          this.y = pos.y / 2
          if (this.y < 0) this.y = 1
          if (this.y > LENGTH) this.y = LENGTH
        }).end((pos, event) => {
          if (!pos.y || pos.y < 5) {
            this.clearState()
            return // 消除误差
          }
          let canRefresh = this.y + INITY > 0 && this.draging
          this.state = 'dragAnimate'
          if (canRefresh) {
            this.draging = false
            this.$emit('refresh')
          } else {
            this.y = 0
            domUtil.transitionEnd(this.$el, this.clearState.bind(this))
          }
        })
      },
      unbindDrag () {
        if (!this.drager) return
        this.drager.destory()
        this.drager = null
      }
    },
    watch: {
      refreshing (val) {
        if (!val) {
          domUtil.transitionEnd(this.$el, this.clearState.bind(this))
        } else {
          this.state = 'refreshAnimate'
        }
      },
      trigger (trigger, oldTrigger) {
        if (trigger === oldTrigger) return
        this.unbindDrag()
        this.bindDrag()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-refresh
    display flex
    margin 0 auto
    width 40px
    height 40px
    color #2ed335
    align-items center
    justify-content center
    background-color #FFF
    border-radius 50%
    box-shadow rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px
    position absolute
    left: 50%
    margin-left -18px
    margin-top 24px
    z-index 90
    .m-icon
      display inline-block
      vertical-align middle

  .m-refresh-icon
    display inline-block
    width 28px
    height 28px
    fill currentColor
    user-select none

  .m-refresh-animate
    transition all 0.45s ease

  .m-refresh-hide
    opacity 1
    transform translate3d(0, -68px, 0)

  .m-refresh-noshow
    opacity 0
    transform scale(0.01)

  .m-refresh-refreshing
    transform scale(1)
    opacity 1

  .an-spinner
    position relative
    width 24px
    height 24px

  .circular
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    margin: auto
    width: 100%
    height: 100%
    animation: rotate 2s linear infinite
    transform-origin: center center

  .path
    stroke-dasharray: 1, 200
    stroke-dashoffset: 0
    stroke-linecap: round
    stroke: $color-spin-green
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite

  @keyframes rotate
    100%
      transform: rotate(360deg)


  @keyframes dash
    0%
      stroke-dasharray: 1, 200
      stroke-dashoffset: 0
    50%
      stroke-dasharray: 89, 200
      stroke-dashoffset: -35
    100%
      stroke-dasharray: 89, 200
      stroke-dashoffset: -124

  @keyframes color
    100%, 0%
      stroke: $color-spin-red
    40%
      stroke: $color-spin-blue
    66%
      stroke: $color-spin-green
    80%, 90%
      stroke: $color-spin-yellow


</style>
