<template>
  <div class="m-infinite-scroll">
    <div v-show="loading && !noData" class="m-loading">
      <span>
        <svg viewBox="0 0 64 64">
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
      </span>
    </div>
    <div v-show="noData" class="no-data"><span>别扯了, 人家是有底线的</span></div>
  </div>
</template>

<script>
  import Scroll from '../../assets/api/scroll'

  export default {
    name: 'infinite-scroll',
    mixins: [Scroll],
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      noData: {
        type: Boolean,
        default: false
      },
      isLoaded: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onScroll () {
        if (this.loading || this.isLoaded) return
        const scroller = this.scroller
        const isWindow = scroller === window
        const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop
        const scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight
        let h = scrollHeight - scrollTop - 5
        let sh = isWindow ? window.innerHeight : scroller.offsetHeight
        if (h <= sh) {
          this.$emit('load')
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .m-infinite-scroll
    height 50px
    line-height 50px
    width 100%
    color #999
    .m-loading
      padding-top 10px
      height 100%
      text-align center
      & span
        display inline-block
        stroke #2ed335
        fill #2ed335
        width 30px
        height 30px
    .no-data
      position relative
      margin 0 auto
      width 65%
      text-align center
      & span
        position relative
        padding 0 10px
        z-index 2
        background-color #fff
      &:after
        position absolute
        left 0
        top 50%
        content: ''
        width 100%
        height 1px
        z-index 1
        background-color #c3c3c3

</style>
