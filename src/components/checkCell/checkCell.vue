<template>
  <div class="check-cell">
    <input :id="`item_${index}`" type="checkbox" class="toggle" v-model="item.isChecked">
    <label :for="`item_${index}`" class="text" :class="{checked: item.isChecked}">{{item.content}}</label>
  </div>
</template>

<script>
  export default {
    name: "check-Cell",
    props: {
      item: Object,
      index: Number
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"

  .check-cell
    position relative
    display flex
    padding 5px 20px
    transition all .2s
    &:active
      background-color $color-light-gray-sss
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
        color $color-light-gray
        text-decoration line-through
</style>
<style scoped>
  .toggle::after{
    display: inline-block;
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  .toggle:checked::after{
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25 L42 71 27 56 l-4 4 20 20 34-52 Z"/></svg>');
  }
</style>
