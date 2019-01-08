import Vue from 'vue'
import Router from 'vue-router'
import JQtest from '@/pages/JQtest'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/jq',
      name: 'JQtest',
      component: JQtest
    }
  ]
})
