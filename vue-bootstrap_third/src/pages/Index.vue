<template>

	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
		<h3>Demo Index</h3>
	</div>
</template>

<script>
export default {
  
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
            }]
        }
    }
}
</script>