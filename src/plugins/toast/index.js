import ToastComponent from './toast'

let $vm

export default {
  install(Vue, options) {

    if (!$vm) {
      const ToastPlugin = Vue.extend(ToastComponent)
      $vm = new ToastPlugin().$mount()
      document.body.appendChild($vm.$el)
    }

    $vm.show = false
    let timer
    let Toast = {
      show(text) {
        clearInterval(timer)
        $vm.show = true;
        $vm.text = text || options.text;
        timer = setTimeout(() => {$vm.show = false},2000)
      },
      hide() {
        $vm.show = false
        clearInterval(timer)
      }
    }

    if (!Vue.$Toast) {
      Vue.$Toast = Toast
    }

    Vue.mixin({
      created() {
        this.$Toast = Vue.$Toast
      }
    })
  }
}

