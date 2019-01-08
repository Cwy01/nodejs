<template>
  <div id="app">
   <SystemHeader></SystemHeader>
  <!-- <router-view></router-view> -->

	   <SystemMenu></SystemMenu>

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
