import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Content from '@/pages/Content'
import JQtest from '@/pages/JQtest'
import Home from '@/pages/Home'
import Library from '@/pages/Library'
import Data from '@/pages/Data'
import EchartsTest from '@/pages/EchartsTest'
import BootstrapTable from '@/pages/BootstrapTable'
import TableTest from '@/pages/TableTest'
import EchartsTestSec from '@/pages/EchartsTestSec'
import TableTestSec from '@/pages/TableTestSec'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
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
		},
		{
		  path: '/ec',
		  name: 'EchartsTest',
		  component: EchartsTest
		},
		{
		  path: '/ecs',
		  name: 'EchartsTestSec',
		  component: EchartsTestSec
		},
		{
		  path: '/bt',
		  name: 'BootstrapTable',
		  component: BootstrapTable
		},
		{
		  path: '/tt',
		  name: 'TableTest',
		  component: TableTest
		},
		{
		  path: '/tts',
		  name: 'TableTestSec',
		  component: TableTestSec
		}
	]
})
