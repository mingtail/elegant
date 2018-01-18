import Vue from 'vue'
import Router from 'vue-router'
import Spinner from '../pages/spinner'
import CheckList from '../pages/checkbox'
import List from '../pages/refreshList'
import Circle from '../pages/circle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spinner',
      name: 'spinner',
      component: Spinner
    },
    {
      path: '/checkList',
      name: 'checkList',
      component: CheckList
    },
    {
      path: '/refresh-infiniteScroll',
      name: 'list',
      component: List
    },
    {
      path: '/circle',
      name: 'circle',
      component: Circle
    }
  ]
})
