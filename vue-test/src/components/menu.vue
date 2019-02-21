<template>
<div class="menu">	
	<div class="menu-head nav nav-pills nav-stacked collapse navbar-collapse" @click="iconStatus">
		<li @click="iconManage">
			<router-link :to="menuLeft.href">
					<span v-bind:class="menuLeft.setClass" class="glyphicon" aria-hidden="true">
						<transition name="fade">
							<span v-show="managerShow">{{menuLeft.name}}</span>
						</transition>
					</span>
				<span v-bind:class="menuLeft.menuClass" v-bind:style="styleObject" class="glyphicon" aria-hidden="true"></span>
			</router-link>
		</li>
	</div>
	
	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<div v-for="(menu,Index) in menus">
			<div v-if="menu.childs">
				<div class="menu-list nav nav-pills nav-stacked collapse navbar-collapse panel-default">
					<li role="tab" v-bind:id="menu.heading" @click="iconShow(Index)">
						<a role="button" data-toggle="collapse" data-parent="#accordion" v-bind:href="menu.href" aria-expanded="false" v-bind:aria-controls="menu.collapse">
							<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true">
								<transition name="fade">
									<span v-show="managerShow">{{menu.name}}</span>
								</transition>
							</span>
							<transition name="fade">
								<span v-show="managerShow">
									<span v-if="menu.childs">
										<span v-bind:class="menu.menuClass" class="glyphicon" aria-hidden="true"></span>
									</span>
								</span>
							</transition>
						</a>
					</li>
					<div v-bind:id="menu.collapse" class="nav nav-pills nav-stacked panel-collapse collapse" role="tabpanel" v-bind:aria-labelledby="menu.heading">
						<li v-for="child in menu.childs">
							<router-link :to="child.href">
								<span v-bind:class="child.setClass" class="glyphicon" aria-hidden="true"> 
									<span v-show="managerShow">{{child.name}}</span>
								</span>
							</router-link>
						</li>
					</div>	
				</div>
			</div>
			<div v-else>
				<div class="menu-list nav nav-pills nav-stacked collapse navbar-collapse">
					<li>
						<router-link :to="menu.href">
							<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true">
								<transition name="fade">
									<span v-show="managerShow">{{menu.name}}</span>
								</transition>
							</span>
						</router-link>
					</li>
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default{
    name : "Menu",
    data(){
        return {
			managerShow:true,
			styleObject: {
				float:"right",
			},
			menuLeft:{
                name:"list",
                href:"/home",
				setClass:"glyphicon-home",
				menuClass:"glyphicon-menu-left",
            },
            menus:[{
                name:"show",
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
                name:"JqTest",
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
                name:"Test3",
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
		},
		iconManage: function () { 
			if(this.managerShow){
				this.menuLeft.menuClass = "glyphicon-menu-right"; 
				this.managerShow = false;
				this.styleObject.float="left";
				this.menuLeft.setClass ="";
				
			}else{
				this.menuLeft.menuClass = "glyphicon-menu-left"; 
				this.managerShow = true;
				this.styleObject.float="right";
				this.menuLeft.setClass ="glyphicon-home";
			}
		},
		...mapActions(['iconStatus'])
		
	},
	//监听数据的变化
	watch: {    
		//menuOption: 'iconShow'
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
.fade-enter-active{
  transition: opacity 1.2s;
}
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>