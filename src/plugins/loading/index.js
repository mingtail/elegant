import ToastComponent from './loading'

let $vm

export default {
  install(Vue, options) {

    if (!$vm) {
      const ToastPlugin = Vue.extend(ToastComponent)
      $vm = new ToastPlugin().$mount()
    }
    $vm.show = false
    let Loading = {
      show({ color, text } = {}) {
        document.body.appendChild($vm.$el)
        $vm.show = true;
        $vm.color = color || options.color;
        $vm.text = text || options.text;
      },
      hide() {
        $vm.show = false
        document.body.removeChild($vm.$el)
      }
    }

    if (!Vue.$loading) {
      Vue.$loading = Loading
    }

    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}

