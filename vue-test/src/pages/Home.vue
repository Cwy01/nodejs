<template>
	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
	<h3>Home<small>/home</small></h3>
	<hr/>
		
		<button class="btn btn-default" @click="iconStatus">点击改变msg</button><br>
		msg: {{iconStatusMsg}}
		
		<div id="vm2-2">
			<button @click="show = !show">Toggle show</button>
			<p v-if="show">Look at me!</p>	
		</div>	
		
		<nav aria-label="...">
			<ul class="pager">
				<li><router-link :to="href">Previous</router-link></li>
				<li><router-link :to="href">Next</router-link></li>
			</ul>
		</nav>

	</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name : 'Home',
    data(){
        return {
			href:"/",
			show:true,
            menus:[{
                name:'Home',
                href:"/home"
            }]
        }
    },
	methods: {
		testJQ () {
			$('.love p').html('jquery 工作正常！')
		},
		...mapActions(['iconStatus'])
	},
    computed: {...mapGetters(['iconStatusMsg'])},
}
</script>