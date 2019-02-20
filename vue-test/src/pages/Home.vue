<template>
	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
	<h3>Home<small>/home</small></h3>
	<hr/>
	
		<nav aria-label="...">
			<ul class="pager">
				<li><router-link :to="href1">Previous</router-link></li>
				<li><router-link :to="href2">Next</router-link></li>
			</ul>
		</nav>
	
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
            }]
        }
    },
	methods: {
		testJQ () {
			$('.love p').html('jquery 工作正常！')
		}
	}
}
</script>