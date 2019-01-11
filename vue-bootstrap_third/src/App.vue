<template>
	<div id="app">
		<!--自定义组件SystemHeader -->
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
			list: []
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
				console.log(this.list);
		}
	}
}
</script>

<style scoped>
//scoped指仅在当前template里的html元素生效
.col-sm-2{
	padding-right: 0;
	background: #f8f8f8;
}
</style>