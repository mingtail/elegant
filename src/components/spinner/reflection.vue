<template>
  <div v-show="isShow" class="reflection" :class="refSize" ref="reflection">
    <div class="bounce-reflection"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      size: Number
    },
    data() {
      return{
        isShow: false
      }
    },
    computed: {
      refSize() {
        return `size-${this.size}`
      },
    },
    beforeDestroy() {
      clearTimeout(this.timerIndex)
    },
    methods: {
      showReflection(x, y) {

        let self = this
        clearTimeout(self.timerIndex)

        self.$refs.reflection.querySelector('.bounce-reflection').classList.remove('bounce-3rd')
        self.isShow = true

        self.$refs.reflection.style.left = x - 20 + 'px'
        self.$refs.reflection.style.top = y - 20 + 'px'

        requestAnimationFrame(() => {
          if(self.$refs.reflection !== undefined) {
            self.$refs.reflection.querySelector('.bounce-reflection').classList.add('bounce-3rd')
          }
        })

        self.timerIndex = setTimeout(function() {
          self.isShow = false
          self.$refs.reflection.querySelector('.bounce-reflection').classList.remove('bounce-3rd')
        },1000)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"
  @import "spinner.styl"

  .reflection
    position fixed
    &.size-40
      width 40px
      height 40px
    .bounce-reflection
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      border-radius 50%
      opacity 0.6
      background-color $color-spin-blue
      &.bounce-3rd
        animation single-bounce 1.0s ease
</style>
