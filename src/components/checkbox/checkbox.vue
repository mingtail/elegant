<template>
  <div class="check-box">
    <i-header :title="title"></i-header>
    <ul class="check-list">
      <li v-for="(item, index) in list" class="check-item border-bottom-1px">
        <input :id="`item_${index}`" type="checkbox" class="toggle" v-model="item.isChecked">
        <label :for="`item_${index}`" class="text" :class="{checked: item.isChecked}">{{item.content}}</label>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import IHeader from '../header/iheader'

  export default {
    data() {
      return {
        title: 'CheckBox',
        list: [
          {content: '吃饭', isChecked: false},
          {content: '睡觉', isChecked: true},
          {content: '打豆豆', isChecked: false}
        ]
      }
    },
    components: {
      IHeader
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/default.styl"

  .check-box
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background-color #fff
    .check-list
      padding 10px 10px 0
      .check-item
        position relative
        display flex
        padding 5px 20px
        transition all .2s
        &:active
          background-color $color-light-grey-sss
        .toggle
          position relative
          flex 0 0 40px
          width 40px
          text-align center
          appearance none
        .text
          flex 1
          padding-left 20px
          align-self center
          transition all .4s
          &.checked
            color $color-light-grey
            text-decoration line-through
</style>
<style scoped rel="css/text">
  .toggle::after{
    display: inline-block;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  .toggle:checked::after{
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25 L42 71 27 56 l-4 4 20 20 34-52 Z"/></svg>');
  }
</style>
