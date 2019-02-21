<template>
	<div id="app">
		<!--自定义组件SystemHeader -->
		<SystemHeader></SystemHeader>
			<div class="row">
				<div @click="statusFun" v-bind:class="{menu2: setMenu ,systemMenu:iconStatusBoolean,systemMenuAdd:!iconStatusBoolean}" class="col-sm-2">
					<SystemMenu></SystemMenu>{{iconStatusMsg}}
				</div>
				<div class="col-sm-10 view"  v-bind:class="{routerView:iconStatusBoolean,routerViewAdd:!iconStatusBoolean}">  
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
import {mapGetters, mapActions} from 'vuex'
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
			iconStatusBoolean: false,
			oldWidth:'',
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
			console.log("iconStatusMsg:"+this.$store.state.iconStatusMsg);
			
		},
		statusFun: function (){
			this.iconStatusBoolean = this.$store.state.iconStatusMsg;
		}
	},
	//监听数据的变化
	watch: {    
		iconStatusBoolean:'statusFun',
	},
    computed: {...mapGetters(['iconStatusMsg'])},
}
</script>

<style>
.menu2{
	border:1px solid #e7e7e7;
	padding-top:30px;
	padding-bottom:30px;
	padding-right:0 !important;
	background-color:#f8f8f8;
}
.view{
	//border:1px solid red;
	margin-top:20px;
}

.systemMenu{
	width:5% !important;
	animation: systemMenuMove .8s;
}
.routerView{
	width: 95% !important;
	animation: routerViewMove .8s;
}
@keyframes systemMenuMove{
	from {width:16.666%;}
	to {width:5%;}
}
@keyframes routerViewMove{
	from {width:83.333%;}
	to {width:95%;}
}
.systemMenuAdd{
	width:16.666% !important;
	animation: systemMenuAdd .8s;
}
.routerViewAdd{
	width: 83.333% !important;
	animation: routerViewAdd .8s;
}
@keyframes systemMenuAdd{
	from {width:5%;}
	to {width:16.666%;}
}
@keyframes routerViewAdd{
	from {width:95%;}
	to {width:83.333%;}
}
</style>