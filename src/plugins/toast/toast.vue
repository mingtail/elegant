<template>
  <transition name="slide-down">
    <div v-show="show" class="toast-wrap">
      <span class="toast">{{text}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "toast",
    props: {
      show: Boolean,
      text: String
    }
  }
</script>
<style>
  .toast-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;
    z-index: 99;
    text-align: center;
  }
  .toast {
    display: inline-block;
    padding: 10px 20px;
    font-size: 13px;
    line-height: 13px;
    color: #fff;
    white-space: nowrap;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.6);
  }

  .toast-wrap.slide-down-enter-active, .toast-wrap.slide-down-leave-active {
    transition: all 0.2s ease;
    transform: none;
  }
  .toast-wrap.slide-down-enter, .toast-wrap.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
</style>
