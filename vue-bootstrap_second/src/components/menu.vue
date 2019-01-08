<template>
	<div>
		<ul class="nav nav-pills nav-stacked">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
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
                childs:[]
            },{
                name:"Library",
                href:"/home/library",
                childs:[]
            },{
                name:"Data",
                href:"/home/library/data",
                childs:[]
            },{
                name:"jq",
                href:"/jq",
                childs:[]
            },{
                name:"Index",
                href:"/",
                childs:[]
            }]
        }
    }
}
</script>
<style >
body { padding-top: 70px;}
</style>