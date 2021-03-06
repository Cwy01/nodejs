import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Content from '@/pages/Content'
import JQtest from '@/pages/JQtest'
import Home from '@/pages/Home'
import Library from '@/pages/Library'
import Data from '@/pages/Data'

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
    },
	{
      path: '/home/library',
      name: 'Library',
      component: Library
    },
	{
      path: '/home/library/data',
      name: 'Data',
      component: Data
    }
  ]
})
