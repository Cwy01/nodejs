<template>
<div class="menu">	
	<ul class="nav nav-pills nav-stacked collapse navbar-collapse">
		<li role="presentation" v-for="menu in menus">	
			<router-link :to="menu.href">
				<span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"> {{menu.name}}</span>
			</router-link>
			<ul class="nav nav-pills nav-stacked">
				<li v-for="child in menu.childs" v-if="menu.childs">
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
            menus:[{
                name:"Home",
                href:"/home",
				setClass:"glyphicon-home",
                childs:[{
                    name:"Index",
                    href:"/",
					setClass:"glyphicon-globe"
                }]
            },{
                name:"JqueryTest",
                href:"/jq",
				setClass:"glyphicon-grain",
                childs:[]
            },{
                name:"EchartsTest",
                href:"/ec",
				setClass:"glyphicon-grain",
                childs:[]
            },{
                name:"TableTest",
                href:"/tt",
				setClass:"glyphicon-grain",
                childs:[]
            }]
        }
    }
}
</script>

<style scoped>

/* scoped指仅在当前template里的html元素生效 */
.menu .navbar-collapse{padding: 0;}
</style>