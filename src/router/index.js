import Vue from 'vue'
import Router from 'vue-router'
import Spinner from '@/components/spinner/spinner'
import CheckBox from '@/components/checkbox/checkbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spinner',
      name: 'spinner',
      component: Spinner
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckBox
    }
  ]
})
