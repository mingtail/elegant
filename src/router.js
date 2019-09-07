import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Spinner from './pages/spinner'
import CheckList from './pages/checkList'
import Progress from './pages/progress'
import Count from './pages/count'
import RefreshList from './pages/refreshList'
import BScroll from './pages/BScroll'

Vue.use(Router)

const Routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/spinner',
    name: 'spinner',
    component: Spinner
  }, {
    path: '/checkList',
    name: 'checkList',
    component: CheckList
  }, {
    path: '/progress',
    name: 'progress',
    component: Progress
  }, {
    path: '/count',
    name: 'count',
    component: Count
  }, {
    path: '/refresh-list',
    name: 'refresh-list',
    component: RefreshList
  }, {
    path: '/bscroll',
    name: 'bscroll',
    component: BScroll
  },
]

export const ROUTER_CONF = Routes.map(item => item.path)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes
})
