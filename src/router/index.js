import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home')
const Style = () => import('@/pages/style')
const Upload = () => import('@/pages/upload')

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    children: [{
      path: 'style',
      component: Style
    },
    {
      path: '',
      component: Style
    },
    {
      path: 'upload',
      component: Upload
    },
    {
      path: '*',
      redirect: '/'
    }
    ]
  }]
})
