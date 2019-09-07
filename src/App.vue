<template>
  <div id="app" @click="aniCircle($event)">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters(['transitionName'])
    },
    methods: {
      aniCircle(e) {
        let circle = document.createElement('div');
        circle.className = 're_circle';
        circle.style.left = `${e.pageX - 20}px`;
        circle.style.top = `${e.pageY - 20}px`;
        this.$el.appendChild(circle);
        self.timerIndex = setTimeout(() => {
          this.$el.removeChild(circle);
        }, 1000)
      }
    }
  }
</script>
