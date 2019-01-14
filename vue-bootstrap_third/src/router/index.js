import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Content from '@/pages/Content'
import JQtest from '@/pages/JQtest'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Indexs',
      component: Index
    },
	{
　　　path: '/Content/:id',
　　　component: Content
　　},
	{
      path: '/jq',
      name: 'JQtest',
      component: JQtest
    },
	{
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
