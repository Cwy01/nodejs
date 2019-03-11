<template>
	<div>
		<FrameMenu></FrameMenu>
		<router-view></router-view>
	</div>
</template>
<script>
import FrameMenu from './pages/frameMenu.vue'
export default{
	components: { FrameMenu },
    name : "frame",
}
</script>