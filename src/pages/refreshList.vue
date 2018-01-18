<template>
  <div class="page-wrap">
    <i-header :title="title"></i-header>
    <div class="list-wrap" ref="listWrap">
      <refresh :refreshing="refreshing"
               :trigger="trigger"
               @refresh="refresh">
      </refresh>
      <ul>
        <li v-for="item in list" class="item border-bottom-1px">item {{item}}</li>
      </ul>
      <infinite-scroll :scroller="scroller"
                       :loading="loading"
                       :no-data="noData"
                       @load="loadMore">
      </infinite-scroll>
    </div>
  </div>

</template>

<script>
  import IHeader from '../components/header/iheader'
  import Refresh from '../components/infiniteScroll/refresh'
  import InfiniteScroll from '../components/infiniteScroll/infiniteScroll'

  export default {
    name: "refresh-list",
    data() {
      return {
        title: 'Refresh-InfiniteScroll',

        refreshing: false,
        trigger: null,

        loading: false,
        noData: false,
        scroller: null,

        list: [],
        refreshNum: 1,
        loadNum: 1
      }
    },
    mounted() {
      for(let i = 1; i <= 20; i++) {
        this.list.push(i)
      }
      this.$nextTick(() => {
        this.trigger = this.scroller = this.$refs.listWrap
      })
    },
    methods: {
      refresh() {
        let self = this
        self.refreshing = true
        setTimeout(() => {
          for(let i = 1; i <= 2; i++) {
            self.list.unshift('refresh item' + self.refreshNum++)
          }
          self.refreshing = false
        },2000)
      },
      loadMore() {
        let self = this
        self.loading = true
        self.noData = false
        setTimeout(() => {
          if(Math.random() > 0.5) {
            for(let i = 1; i <= 2; i++) {
              self.list.push('load item' + self.loadNum++)
            }
            self.loading = false
          } else {
            self.noData = true
          }
        },2000)
      }
    },
    components: {
      IHeader,
      Refresh,
      InfiniteScroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .page-wrap
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff
    .list-wrap
      position absolute
      top 44px
      bottom 0
      left 0
      width 100%
      overflow auto
      -webkit-overflow-scrolling touch
      .item
        padding 10px
        text-align center

</style>
