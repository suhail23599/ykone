import Vue from 'vue'
import Router from 'vue-router'
import AnalyticsView  from '../pages/AnalyticsView'

Vue.use(Router)

const routes = [
  {
    name: 'AnalyticsView',
    path: '/',
    component: AnalyticsView
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router