<template>
  <transition name="fade">
    <div v-show="show" class="spinner-container">
      <div class="spinner-wrap">
        <div class="spinner" :style="`background: ${color}`"></div>
        <div v-show="text" class="loading-text" :style="`color: ${color}`">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "loading",
    props: {
      show: Boolean,
      color: {
        type: String,
        default: '#feae02'
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .spinner-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    .spinner-wrap {
      position: absolute;
      top: 50%;
      width: 100%;
      margin-top: -40px;
    }
    .spinner {
      margin: 0 auto;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      opacity: 0.6;
      animation: single-bounce 1.0s infinite ease-in-out;
    }
    .loading-text {
      margin-top: 8px;
      font-size: 13px;
      text-align: center;
      white-space: nowrap;
      letter-spacing: 2px;
    }
  }
  @keyframes single-bounce {
    0% {transform: scale(0.0);opacity: 1;}
    100% {transform: scale(1.0);opacity: 0;}
  }
</style>
