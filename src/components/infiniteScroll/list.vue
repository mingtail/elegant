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
  import IHeader from '../header/iheader'
  import Refresh from './refresh'
  import InfiniteScroll from './infiniteScroll'

  export default {
    name: "list",
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
        this.list.push(i);
      }
      this.$nextTick(() => {
        this.trigger = this.scroller = this.$refs.listWrap;
      })
    },
    methods: {
      refresh() {
        let self = this
        self.refreshing = true;
        setTimeout(() => {
          for(let i = 1; i <= 2; i++) {
            self.list.unshift('refresh item' + self.refreshNum++);
          }
        },2000)
      },
      loadMore() {
        let self = this
        let n = Math.round(Math.random());
        self.noData = false;
        self.loading = true;
        if(self.list.length<=50) {
          setTimeout(() => {
            for(let i = 1; i <= 2; i++) {
              self.list.push('load item' + self.loadNum++);
            }
            self.loading = false;
          },2000)
        } else {
          self.noData = true;
        }
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
