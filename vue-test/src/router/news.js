import frameHome from '@/frame/pages/frameHome'
import frameMenu from '@/frame/pages/frameMenu'
import firstFrame from '@/frame/pages/firstFrame'
import secondFrame from '@/frame/pages/secondFrame'
import thirdFrame from '@/frame/pages/thirdFrame'

export default [
	{
	  path: '/news/frameHome',
	  name: 'frameHome',
	  component: frameHome
	},
	{
	  path: '/news/frameMenu',
	  name: 'frameMenu',
	  component: frameMenu
	},
	{
	  path: '/news/firstFrame',
	  name: 'firstFrame',
	  component: firstFrame
	},
	{
	  path: '/news/secondFrame',
	  name: 'secondFrame',
	  component: secondFrame
	},
	{
	  path: '/news/thirdFrame',
	  name: 'thirdFrame',
	  component: thirdFrame
	}
]