<template>
	<div id="app">
		<!--自定义组件SystemHeader -->
		<SystemHeader></SystemHeader>
			<div class="row">
				<div v-bind:class="{menu2: setMenu }" class="systemMenu col-sm-2">
					<SystemMenu></SystemMenu>
				</div>
				<div class="col-sm-10 view">  
					<router-view></router-view>
				</div>	
			</div>
		<SystemFooter></SystemFooter>
	</div>
</template>

<script>
//引用自定义组件
import SystemHeader from './components/header.vue'
import SystemFooter from './components/footer.vue'
import SystemMenu from './components/menu.vue'
export default {
	// 这里写自己的代码
	//把引用的组件给申明到components中
	components: { SystemHeader, SystemFooter, SystemMenu },
    name: 'app',
	
	data (){
	//数据，可以用this.list来传递数据
		return {
			list: [],
			setMenu: true,
		}
	},
	//当组件加载完成时，需要执行的内容
	created() {
		this.getData();
	},
	//组件的方法
	methods: {
		getData() {
			this.list = "list";
			console.log(this.list+"------"+$(".systemMenu").width()+"--------"+$(window).width());
			if($(".systemMenu").width()==$(window).width()){
				this.setMenu = false
			}else{
				this.setMenu = true
			}
		}
	},
	//监听数据的变化
	watch: {    
		//menuOption: 'getData'
	}
}
</script>

<style>
.menu2{
	border:1px solid #e7e7e7;
	padding-top:30px;
	padding-bottom:30px;
	padding-right:0;
	background-color:#f8f8f8;
}
.view{
	//border:1px solid red;
	margin-top:20px;
}

</style>