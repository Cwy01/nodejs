<template>
<div>
	<div class="bs-example bs-example-tabs">
		<ul class="nav nav-tabs">
			<li role="presentation" v-for="(menu,Index) in frameMenus" @click="activeFun(Index)" v-bind:class="{active:activeStatus[Index]}">
				<router-link :to="menu.href" v-bind:id="menu.tab" v-bind:aria-expanded="activeStatus[Index]">{{menu.name}}</router-link>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
export default {
    name : 'frameMenu',
    data(){
        return {
			href:"/news/frameMenu",	
			
            frameMenus:[{
                name:'firstMenu',
				tab:'firstTab',
                href:"/news/firstFrame"
            },{
                name:'secondMenu',
				tab:'secondTab',
                href:"/news/secondFrame"
            },{
                name:'thirdMenu',
				tab:'thirdTab',
                href:"/news/thirdFrame"
            }],
			activeStatus: [true,0,0,0,0,0,0,0,0,0,],
        }
    }, 
	methods: {
		activeFun: function (Index) { 
			let arr = new Array();
			this.activeStatus.forEach(function(v,k){
				if(k == Index){
					arr.push(true);
				}else{
					arr.push(false);
				}
			})
			this.activeStatus = arr;
			console.log(activeStatus);
		}
	}
}
</script>
<style scoped>


</style>