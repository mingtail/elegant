<template>
  <div class="page page_bscroll">
    <i-header title="BScroll"></i-header>

    <div class="page-scroll">
      <scroll ref="scroll"
              :init="init"
              :length="list.length"
              :pull-down="true"
              :pull-up="true"
              :has-more="hasMore"
              :listen-scroll="true"
              @pullDown="refreshData"
              @pullUp="getData">
        <div class="scroll-inner">

          <ul>
            <li v-for="item in list" class="item border-bottom-1px">item {{item}}</li>
          </ul>

        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import IHeader from '../components/header/iheader'
  import Scroll from '../components/scroll/Scroll'

  export default {
    name: "bscroll",
    data() {
      return {
        init: false,
        hasMore: true,
        pageNum: 1,
        list: [],
      }
    },
    mounted() {
      this.$Toast.show('页面加载中!');
      this.$refs.scroll.autoPullDownRefresh();
    },
    methods: {
      refreshData() {
        setTimeout(() => {
          if(!this.init) this.init = true;
          this.hasMore = Math.random() > 0.5;   // 是否有更多记录
          this.list = [];
          for(let i = 1; i <= 20; i++) {
            this.list.push(i)
          }
          this.$refs.scroll.finishPullDown();
        }, 2000)
      },
      getData() {
        if (!this.hasMore) {
          this.$refs.scroll.finishPullUp(false);
          return;
        }
        setTimeout(() => {
          if(!this.init) this.init = true;
          this.hasMore = this.pageNum < 5;  // 是否有更多记录
          if(this.pageNum) {
            for(let i = 1; i <= 5; i++) {
              this.list.push(i);
            }
          }
          this.pageNum++;
          this.$refs.scroll.finishPullUp();
        }, 2000)
      },
    },
    components: {
      IHeader,
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page_bscroll
    .item
      padding 10px
      text-align center
</style>