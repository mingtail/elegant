import Vue from 'vue'
import Router from 'vue-router'
import Spinner from '../pages/spinner'
import CheckList from '../pages/checkList'
import List from '../pages/refreshList'
import Progress from '../pages/progress'
import Count from '../pages/count'

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
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    }
  ]
})
