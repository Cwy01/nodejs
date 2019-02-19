<template>
<div class="menu">	
	<div class="menu-head nav nav-pills nav-stacked collapse navbar-collapse">
		<li>
			<router-link :to="menuLeft.href">
				{{menuLeft.name}}
				<span v-bind:class="menuLeft.setClass" class="glyphicon" aria-hidden="true"></span>
			</router-link>
		</li>
	</div>
	
	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<div v-for="(menu,Index) in menus">
			<div v-if="menu.childs">
				<div class="menu-list nav nav-pills nav-stacked collapse navbar-collapse panel-default">
					<li role="tab" v-bind:id="menu.heading" @click="iconShow(Index)">
						<a role="button" data-toggle="collapse" data-parent="#accordion" v-bind:href="menu.href" aria-expanded="false" v-bind:aria-controls="menu.collapse">
							<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"> {{menu.name}}</span>
							<span v-if="menu.childs">
								<span v-bind:class="menu.menuClass" class="glyphicon" aria-hidden="true"></span>
							</span>
						</a>
					</li>
					<div v-bind:id="menu.collapse" class="nav nav-pills nav-stacked panel-collapse collapse" role="tabpanel" v-bind:aria-labelledby="menu.heading">
						<li v-for="child in menu.childs">
							<router-link :to="child.href">
								<span v-bind:class="child.setClass" class="glyphicon" aria-hidden="true"> {{child.name}}</span>
							</router-link>
						</li>
					</div>	
				</div>
			</div>
			<div v-else>
				<div class="menu-list nav nav-pills nav-stacked collapse navbar-collapse">
					<li>
						<router-link :to="menu.href">
							<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"> {{menu.name}}</span>
						</router-link>
					</li>
				</div>
			</div>
		</div>
	</div>
	
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
				
            },
            menus:[{
                name:"展开",
                href:"#collapseOne",
				heading:"headingOne",
				collapse:"collapseOne",
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
                href:"#collapseTwo",
				heading:"headingTwo",
				collapse:"collapseTwo",
				setClass:"glyphicon-grain",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				
                childs:[{
                    name:"jq",
					href:"/jq",
					setClass:"glyphicon-grain",
                }]
            },{
                name:"headingThree",
                href:"#collapseThree",
				heading:"headingThree",
				collapse:"collapseThree",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				childs:[{
                    name:"Home",
					href:"/home",
					setClass:"glyphicon-home",
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
/* scoped指仅在当前template里的html元素生效 */
.menu-head{border-bottom:1px solid #e7e7e7;}
.menu-list li {margin:0;}
.menu .navbar-collapse {padding: 0;}
.list {float:right;}
.nav-pills li a {border-radius: 0px;}
</style>