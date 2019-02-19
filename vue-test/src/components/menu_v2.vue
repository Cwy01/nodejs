<template>
<div class="menu">	
	<ul class="menu-head nav nav-pills nav-stacked collapse navbar-collapse ">
		<li>
			<router-link :to="menuLeft.href">
				{{menuLeft.name}}
				<span v-bind:class="menuLeft.setClass" class="glyphicon" aria-hidden="true"></span>
			</router-link>
		</li>
	</ul>

	<ul class="menu-list nav nav-pills nav-stacked collapse navbar-collapse ">
		<li role="presentation" v-for="(menu,Index) in menus">	
			<router-link :to="menu.href">
				<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"> {{menu.name}}</span>
				<span v-if="menu.childs">
					<span @click="iconShow(Index)" v-bind:class="menu.menuClass" class="glyphicon" aria-hidden="true"></span>
				</span>
			</router-link>
			<ul class="nav nav-pills nav-stacked">
				<li v-for="child in menu.childs" v-if="menu.menuView">
					<router-link :to="child.href">
						<span v-bind:class="child.setClass" class="glyphicon" aria-hidden="true"> {{child.name}}</span>
					</router-link>
				</li>
			</ul>
			
		</li>
	</ul>	
</div>
</template>

<script>
export default{
    name : "Menu",
    data(){
        return {
			menuLeft:{
                name:"功能列表",
                href:"/home",
				setClass:"glyphicon-menu-left list",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },
            menus:[{
                name:"展开",
                href:"/home",
				setClass:"glyphicon-home",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
                childs:[{
                    name:"Home",
					href:"/home",
					setClass:"glyphicon-home",
                },{
                    name:"Index",
                    href:"/",
					setClass:"glyphicon-globe"
                }]
            },{
                name:"JqueryTest",
                href:"/jq",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
                childs:[{
                    name:"Home",
					href:"/home",
					setClass:"glyphicon-home",
                },{
                    name:"Index",
                    href:"/",
					setClass:"glyphicon-globe"
                }]
            },{
                name:"EchartsTest",
                href:"/ec",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },{
                name:"TableTest",
                href:"/tt",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },{
                name:"EchartsTestSec",
                href:"/ecs",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },{
                name:"TableTestSec",
                href:"/tts",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            }]
        }
    }, 
	methods: {
		iconShow: function (index) { 
			//alert(this.menus[index].menuClass);
			if(this.menus[index].menuView){
				this.menus[index].menuClass = "glyphicon-menu-down list"; 
				this.menus[index].menuView = false;
			}else{
				this.menus[index].menuClass = "glyphicon-menu-up list"; 
				this.menus[index].menuView = true;
			}
		}  
	},
	//监听数据的变化
	watch: {    
		menuOption: 'iconShow'
	}
}
</script>

<style scoped>
.menu-head{border-bottom:1px solid #e7e7e7;
}
.menu-list li{
	//border:1px red solid;
	margin:0;
}
/* scoped指仅在当前template里的html元素生效 */
.menu .navbar-collapse{padding: 0;}
.list{float:right;}
</style>