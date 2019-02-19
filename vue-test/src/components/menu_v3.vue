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
	
	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<div class="menu-list nav nav-pills nav-stacked collapse navbar-collapse " v-for="(menu,Index) in menus">
			<li role="tab"  v-bind:id="menu.heading">
				
				<a role="button" data-toggle="collapse" data-parent="#accordion" v-bind:href="menu.href" aria-expanded="true" v-bind:aria-controls="Index">
					<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"> {{menu.name}}</span>
					<span v-if="menu.childs">
						<span v-bind:class="menuClass" class="glyphicon" aria-hidden="true"></span>
					</span>
				</a>
				
				<ul v-bind:id="Index" class="nav nav-pills nav-stacked panel-collapse collapse" role="tabpanel" v-bind:aria-labelledby="menu.heading">
					<li v-for="child in menu.childs">
						<router-link :to="child.href">
							<span v-bind:class="child.setClass" class="glyphicon" aria-hidden="true"> {{child.name}}</span>
						</router-link>
					</li>
				</ul>
				
			</li>
		</div>
	</div>
	
</div>
</template>

<script>
export default{
    name : "Menu",
    data(){
        return {
			menuClass:"glyphicon-menu-down list",
			menuView:false,
			menuLeft:{
                name:"功能列表",
                href:"/home",
				heading:"headingOne",
				collapse:"collapseOne",
				setClass:"glyphicon-menu-left list",
				
            },
            menus:[{
                name:"展开",
                href:"#0",
				
				setClass:"glyphicon-home",
                childs:[{
                    name:"Home",
					href:"/jq",
					setClass:"glyphicon-home",
                },{
                    name:"Index",
                    href:"/",
					setClass:"glyphicon-globe"
                }]
            },{
                name:"JqueryTest",
                href:"#1",
				heading:"headingTwo",
				collapse:"collapseTwo",
				setClass:"glyphicon-grain",				
                childs:[{
                    name:"Home",
					href:"/ecs",
					setClass:"glyphicon-home",
                }]
            }]
        }
    }, 
	methods: {
		
	},
	//监听数据的变化
	watch: {    
		
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