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
		// 映射 this.status() 到 this.$store.dispatch('iconStatus')
		//...mapActions({status: 'iconStatus'})
		...mapActions(['iconStatus'])
	},
    computed: {...mapGetters(['iconStatusMsg'])},
}
</script>
<style scoped>


</style>