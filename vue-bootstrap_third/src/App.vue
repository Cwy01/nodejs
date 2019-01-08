<template>
	<div id="app">
		<SystemHeader></SystemHeader>
			<div class="row">
				<div class="col-sm-2">
					<SystemMenu></SystemMenu>
				</div>
				<div class="col-sm-10">  
					<router-view></router-view>
				</div>	
			</div>	
		<SystemFooter></SystemFooter>
	</div>
</template>

<script>
import SystemHeader from './components/header.vue'
import SystemFooter from './components/footer.vue'
import SystemMenu from './components/menu.vue'
export default {
	components: { SystemHeader, SystemFooter, SystemMenu },
    name: 'app'
}
</script>

<style>

</style>
