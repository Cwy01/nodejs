<template>
	<div>
		<ul class="nav nav-pills nav-stacked">
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
                name:"Library",
                href:"/home/library",
				setClass:"glyphicon-align-justify",
                childs:[]
            },{
                name:"Data",
                href:"/home/library/data",
				setClass:"glyphicon-dashboard",
                childs:[]
            },{
                name:"JqTest",
                href:"/jq",
				setClass:"glyphicon-grain",
                childs:[]
            }]
        }
    }
}
</script>
<style >
body { padding-top: 70px;}
</style>