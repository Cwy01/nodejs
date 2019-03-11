<template>
	<div>
	<h3>frameHome<small>/frameHome</small></h3>
	<hr/>
	<router-link :to="href" class="btn btn-default">frameMenu</router-link>
	</div>
</template>
<script>
export default {
    name : 'frameHome',
    data(){
        return {
			href:"/news/frameMenu",
            menus:[{
                name:'frameHome',
                href:"/news/frameHome"
            }]
        }
    }
}
</script>
<style scoped>


</style>