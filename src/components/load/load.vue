<template>
  <div class="load-wrap">
    <div class="inner-wrap">
      <svg viewBox="0 0 64 64">
        <g stroke-width="7" stroke-linecap="round">
          <line x1="10" x2="10" y1="18.9287" y2="45.0713">
            <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
            <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
          </line>
          <line x1="24" x2="24" y1="16.1857" y2="47.8143">
            <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
            <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
          </line>
          <line x1="38" x2="38" y1="16" y2="48">
            <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
            <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
          </line>
          <line x1="52" x2="52" y1="17.8143" y2="44.3715">
            <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
            <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
          </line>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>

  export default {
    name: "loading",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .load-wrap
    display none
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 9999
    background-color transparent
    .inner-wrap
      position absolute
      margin-left -15px
      top 40%
      left 50%
      width 50px
      height 50px
      transition all .3s ease
      stroke rgb(46, 211, 53)
      fill rgb(46, 211, 53)

</style>
