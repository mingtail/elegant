<template>
  <span/>
</template>

<script>
  import { CountUp } from 'countup.js';
  const typeOf = type => object => Object.prototype.toString.call(object) === `[object ${type}]`;
  const isFunction = typeOf('Function');
  export default {
    __countup__: CountUp,
    name: 'count-up',
    props: {
      delay: {
        type: Number,
        required: false,
        default: 0,
      },
      endVal: {
        type: Number,
        required: true,
      },
      options: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        instance: null,
      };
    },
    mounted() {
      this.create();
    },
    watch: {
      endVal: {
        handler(value) {
          if (this.instance && isFunction(this.instance.update)) {
            this.instance.update(value);
          }
        },
        deep: false
      }
    },
    beforeDestroy() {
      this.destroy();
    },
    methods: {
      create() {
        const that = this;
        if (that.instance) {
          return;
        }
        that.instance = new CountUp(that.$el, that.endVal, that.options);
        if (that.instance.error) {
          // error
          return;
        }
        if (that.delay < 0) {
          that.start();
          return;
        }
        setTimeout(() => that.start(), that.delay);
      },
      destroy() {
        this.instance = null;
      },
      start(callback) {
        if (this.instance && isFunction(this.instance.start)) {
          return this.instance.start(callback);
        }
      },
      pauseResume() {
        if (this.instance && isFunction(this.instance.pauseResume)) {
          return this.instance.pauseResume();
        }
      },
      reset() {
        if (this.instance && isFunction(this.instance.reset)) {
          return this.instance.reset();
        }
      },
      update(newEndVal) {
        if (this.instance && isFunction(this.instance.update)) {
          return this.instance.update(newEndVal);
        }
      }
    }
  }
</script>
