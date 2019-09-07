<template>
  <div class="em-wrap">
    <span>{{getText}}</span>
  </div>
</template>

<script>
  export default {
    name: "empty",
    props: {
      type: {
        type: Number,
        default: 1
      },
      text: {
        type: String,
        default: ''
      }
    },
    computed: {
      getText() {
        return this.text
        // return this.text || this.$t('key.noData_2')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .em-wrap {
    padding-top: 210px;
    padding-bottom: 20px;
    text-align: center;
    color: #737373;
    background-repeat: no-repeat;
    background-position: center 20px;
    background-size: auto 172px;
    background-image: url('./empty.png');
  }
</style>
