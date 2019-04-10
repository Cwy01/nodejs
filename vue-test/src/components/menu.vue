<template>
<div class="menu">	
	<div class="menu-head nav nav-pills nav-stacked collapse navbar-collapse" @click="iconStatus">
		<li  class="hiddenStyle" @click="iconManage">
			<router-link :to="menuLeft.href">
				<span v-bind:class="[{glyphicon:glyphiconView}, menuLeft.setClass]" aria-hidden="true"></span>
				<transition name="managerFade">
					<span v-show="managerShow">
						{{menuLeft.name}}
						<span v-bind:class="[{glyphicon:glyphiconView, list:menuLeft.menuView}, menuLeft.menuClass]" aria-hidden="true"></span>
					</span>
				</transition>
			</router-link>
		</li>
	</div>
	
	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<div v-for="(menu,Index) in menus" v-if="menu.childs" class="menu-list nav nav-pills nav-stacked collapse navbar-collapse panel">
			<li class="hiddenStyle" role="tab" v-bind:id="menu.heading" @click="iconShow(Index)">
				<a role="button" data-toggle="collapse" data-parent="#accordion" v-bind:data-target="menu.target" aria-expanded="false" v-bind:aria-controls="menu.collapse">
					<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"></span>
					<transition name="managerFade">
						<span v-show="managerShow">
							{{menu.name}}
							<span v-if="menu.childs">
								<span v-bind:class="[{glyphicon:glyphiconView, list:menu.menuView}, menu.menuClass]" aria-hidden="true"></span>
							</span>
						</span>
					</transition>
				</a>
			</li>
			<div v-bind:id="menu.collapse" ref="childInfo" class="nav nav-pills nav-stacked panel-collapse collapse" role="tabpanel" v-bind:aria-labelledby="menu.heading">
				<li class="hiddenStyle" v-for="child in menu.childs">
					<router-link :to="child.href">
						<span v-bind:class="child.setClass" class="glyphicon" aria-hidden="true"> </span>
							<transition name="managerFade">
								<span v-show="managerShow">{{child.name}}</span>
							</transition>
					</router-link>
				</li>
			</div>	
		</div>
		
		
		<div v-else class="menu-list nav nav-pills nav-stacked collapse navbar-collapse">
			<li class="hiddenStyle">
				<router-link :to="menu.href">
					<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"></span>
					<transition name="managerFade">
							<span v-show="managerShow">{{menu.name}}</span>
						</transition>
				</router-link>
			</li>
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
			glyphiconView:true,
			menuLeft:{
                name:"功能列表",
                href:"",
				setClass:"glyphicon-th-list",
				menuClass:"glyphicon-menu-left list",
				menuView:true,
				glyphiconView:true,
            },
            menus:[{
                name:"Home",
                target:"#collapseOne",
				heading:"headingOne",
				collapse:"collapseOne",
				setClass:"glyphicon-home",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				glyphiconView:true,
                childs:[{
                    name:"Home",
					href:"/home",
					setClass:"glyphicon-home",
                },{
                    name:"Index",
                    href:"/",
					setClass:"glyphicon-leaf"
                },{
                    name:"jq",
					href:"/jq",
					setClass:"glyphicon-tent",
                }]
            },{
                name:"Table",
                target:"#collapseTwo",
				heading:"headingTwo",
				collapse:"collapseTwo",
				setClass:"glyphicon-menu-hamburger",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				glyphiconView:true,
                childs:[{
					name:"Table",
					href:"/tt",
					setClass:"glyphicon-indent-right",				
				},{
					name:"Table+",
					href:"/tts",
					setClass:"glyphicon-indent-left",				
				}]
            },{
                name:"Echarts",
                target:"#collapseThree",
				heading:"headingThree",
				collapse:"collapseThree",
				setClass:"glyphicon-tree-conifer",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				glyphiconView:true,
				childs:[{
					name:"Echarts",
					href:"/ec",
					setClass:"glyphicon-tree-deciduous",				
				},{
					name:"Echarts+",
					href:"/ecs",
					setClass:"glyphicon-grain",				
				}]
            },{
                name:"news",
                href:"/news/frameHome",
				setClass:"glyphicon-education",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				glyphiconView:true,
            }]
        }
    }, 
	methods: {
		iconShow: function (index) { 
			this.$nextTick(()=>{
				if(this.$refs.childInfo[index].innerText==""){
					this.menus[index].menuClass = "glyphicon-menu-up list"; 
				}else{
					this.menus[index].menuClass = "glyphicon-menu-down list"; 
				}
				
				this.menus.forEach((menu,menuIndex,arr) => {
					if(((menu.childs!=null)&&(menuIndex!=index))){
						menu.menuClass = "glyphicon-menu-down list"; 
					}
				});				
			})	
		},
		iconManage: function () { 
		
			if(this.managerShow){
				this.menuLeft.menuClass = "glyphicon-menu-right"; 
				this.managerShow = false;
				this.menuLeft.setClass ="glyphicon-menu-right";
				//this.glyphiconView = false;
			}else{
				this.menuLeft.menuClass = "glyphicon-menu-left"; 
				this.managerShow = true;
				this.menuLeft.setClass ="glyphicon-th-list";
				//this.glyphiconView = true;

			}
		},
		...mapActions(['iconStatus'])
		
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
.hiddenStyle {overflow:hidden;}
.list {float:right;}
.nav-pills li a {border-radius: 0px;}
.panel-group .panel+.panel {margin-top: 0px;}
.panel {margin-bottom: 0px;background-color: #f8f8f8;border: 0px solid transparent;border-radius: 0px;-webkit-box-shadow: 0 0px 0px rgba(0,0,0,0);}

.managerFade-enter-active{animation: managerFade-in .9s;}
.managerFade-leave-active {transition: opacity 0s ease 0s;}
.managerFade-enter {opacity: 0;}
.managerFade-leave-to {opacity: 0;}
@Keyframes managerFade-in{0%{ opacity: 0;position: absolute;}70%{opacity: 0;position: relative;}100%{opacity: 1;position: relative;}}
</style>