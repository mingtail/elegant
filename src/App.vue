<template>
  <div id="app" @click="aniCircle($event)">
    <header class="app-header border-bottom-1px">
      <img src="./assets/img/logo.png" width="32" height="32">
    </header>
    <tab></tab>

    <transition name="move">
      <router-view class="r-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'

  export default {
    name: 'app',
    methods: {
      aniCircle(e) {
        console.log(e.pageX, e.pageY);
        let circle = document.createElement('div');
        circle.className = 're_circle';
        circle.style.left = `${e.pageX - 20}px`;
        circle.style.top = `${e.pageY - 20}px`;
        this.$el.appendChild(circle);
        self.timerIndex = setTimeout(() => {
          this.$el.removeChild(circle);
        }, 1000)
      }
    },
    components: {
      Tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/stylus/default.styl"

  #app
    min-height 100vh
    overflow-x hidden
    .app-header
      padding 10px
      text-align center
      box-shadow 0 0 5px $color-light-gray
      background-color $color-wx-gray
    .r-view
      &.move-enter-active, &.move-leave-active
        transition all .2s ease
      &.move-enter, &.move-leave-to
        transform translate3d(100%, 0, 0)

    .re_circle
      position absolute
      top 0
      left 0
      width 40px
      height 40px
      border-radius 50%
      opacity 0.6
      background-color $color-spin-blue
      animation single-bounce 1.0s ease

  @keyframes single-bounce
    0%
      transform: scale(0.0)
      opacity: 1
    100%
      transform: scale(1.0)
      opacity: 0
</style>
