<template>
  <div ref="scroller" class="scroller">
    <div class="scroller-wrap">
      <!--pull down-->
      <div v-if="pullDown" class="pulldown-wrap">
        <svg v-show="!refreshState" viewBox="0 0 24 24" class="refresh-icon" :style="circularStyle">
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
        </svg>
        <svg v-show="refreshState==1" viewBox="25 25 50 50" class="circular" :style="svgColor">
          <circle cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" class="path"></circle>
        </svg>
        <span v-if="refreshState==2">已刷新</span>
      </div>
      <slot></slot>

      <empty v-if="!length && init" :type="emptyType" :text="emptyText"></empty>

      <!--pull up-->
      <div v-if="pullUp && length" class="pullup-wrap">
        <svg v-show="hasMore" viewBox="0 0 64 64" class="load-icon" :style="svgColor">
          <g>
            <circle cx="16" cy="32" stroke-width="0" r="5.35374">
              <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5"
                       repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="32" cy="32" stroke-width="0" r="5.64626">
              <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5"
                       repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="48" cy="32" stroke-width="0" r="4.64626">
              <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6"
                       repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
            </circle>
          </g>
        </svg>
        <span v-show="!hasMore" class="no-data">{{getNoDataText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullDown  from '@better-scroll/pull-down'
  import PullUp  from '@better-scroll/pull-up'
  import Empty from './Empty'

  BScroll.use(PullDown)
  BScroll.use(PullUp)

  const TIME_BOUNCE = 300
  const TIME_STOP = 800
  const THRESHOLD = 90

  export default {
    name: "scroll",
    props: {
      init: {
        type: Boolean,
        default: false
      },
      length: {
        type: Number,
        default: 0  // list长度
      },
      click: {
        type: Boolean,
        default: true
      },
      iconColor: {
        type: String,
        default: '#50A9B5'
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      pullDown: {
        type: Boolean,
        default: false
      },
      pullUp: {
        type: Boolean,
        default: false
      },
      emptyType: Number,
      emptyText: String,
      hasMore: {
        type: Boolean,
        default: true
      },
      noDataText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        bscroll: null,
        refreshState: 0, // 0: 刷新前, 1: 刷新中, 2: 刷新完成...
        isPullUp: false,
        posY: 0
      }
    },
    computed: {
      getNoDataText() {
        return this.noDataText || '无数据';
      },
      svgColor() {
        return `stroke: ${this.iconColor}; fill: ${this.iconColor}`;
      },
      circularStyle () {
        let style = {}
        if (!this.refreshState) {
          let percentage = this.posY / THRESHOLD;
          let rotate = 'rotate(' + (360 * percentage) + 'deg)';
          style['-webkit-transform'] = style['transform'] = rotate;
          // style.fill = '#999';
        }
        return style;
      },
    },
    mounted() {
      let self = this;
      self.bscroll = new BScroll(self.$refs.scroller, {
        scrollY: true,
        click: self.click,
        // bounceTime: TIME_BOUNCE,
        swipeBounceTime: TIME_BOUNCE,
        pullDownRefresh: self.pullDown,
        pullUpLoad: self.pullUp,
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/, className:/(^|\s)bs_exc(\s|$)/}
      })
      self.pullDown && self.bscroll.on('pullingDown', self.pullingDownHandler);
      self.listenScroll && self.bscroll.on('scroll', self.scrollHandler);
      self.pullUp && self.bscroll.on('pullingUp', self.pullingUpHandler);
    },
    destroyed() {
      this.bscroll.destroy();
    },
    methods: {
      refresh() {
        this.$nextTick(() => {
          this.bscroll.refresh();
        })
      },
      autoPullDownRefresh() {
        this.bscroll.autoPullDownRefresh();
      },
      scrollTo(x, y, time = 300) {
        this.bscroll.scrollTo(x, y, time);
      },
      scrollToElement(el, time = 300) {
        this.bscroll.scrollToElement(el, time, 0, 0)
      },
      scrollHandler(pos) {
        this.posY = pos.y;
        this.$emit('scroll', pos.y);
      },
      pullingDownHandler() {
        this.refreshState = 1;
        // 父组件监听刷新数据后, 调用 finishPullDown();
        this.$emit('pullDown');
      },
      finishPullDown() {
        this.refreshState = 2;
        setTimeout(() => {
          this.bscroll.finishPullDown();
          this.refresh();
          setTimeout(() => {
            this.refreshState = 0;
          }, TIME_BOUNCE)
        }, TIME_STOP)
      },
      pullingUpHandler() {
        this.isPullUp = true;
        // 父组件监听加载数据后, 调用 finishPullUp();
        this.$emit('pullUp');
      },
      finishPullUp(isFresh = true) {
        this.bscroll.finishPullUp();
        isFresh && this.refresh();  // 无更新数据时, 不执行
        this.isPullUp = false;
      }
    },
    components: {
      Empty
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  $color_gray = #999999
  $w = 70px

  .scroller {
    /*position: relative;*/
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .scroller-wrap {
      min-height: calc(100% + 1px);
    }
    .pulldown-wrap {
      position: absolute;
      left: 0;
      top: 0;
      padding: 8px;
      width: 100%;
      height: 40px;
      line-height: 24px;
      font-size: 13px;
      color: $color_gray;
      text-align: center;
      box-sizing: border-box;
      transform: translateY(-100%) translateZ(0);
    }
    .pullup-wrap {
      text-align: center;
      padding: 10px;
    }
    .refresh-icon {
      display: inline-block;
      width: 28px;
      height: 28px;
      fill: $color_gray;
      user-select: none;
    }
    .circular {
      position: relative;
      display: inline-block;
      width: 24px;
      height: 24px;
      animation: rotate 2s linear infinite;
      transform-origin: center center;
    }
    .path {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
    .load-icon {
      display: inline-block;
      width: 30px;
      height: 30px;
    }
    .no-data {
      position: relative;
      display: inline-block;
      line-height: 30px;
      font-size: 12px;
      color: $color_gray;
      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: $w - 5px;
        height: 1px;
        transform: scaleY(0.5);
      }
      &:before {
        left: -($w);
        background: linear-gradient(to right, transparent, $color_gray);
      }
      &:after {
        right: -($w);
        background: linear-gradient(to left, transparent, $color_gray);
      }
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }

</style>
