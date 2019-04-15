<template>
	<div id="app">
		<!--自定义组件SystemHeader -->
		<SystemHeader></SystemHeader>
			
			<div @click="statusFun" v-bind:class="{menu2: setMenu ,systemMenu:iconStatusBoolean,systemMenuAdd:!iconStatusBoolean}">
				<SystemMenu></SystemMenu>
				<!-- {{iconStatusMsg}} -->
			</div>
			
			<div class="row col-sm-12 view"  v-bind:class="{routerView:iconStatusBoolean,routerViewAdd:!iconStatusBoolean}">
				<router-view></router-view>
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

<style scoped>
.menu2 {border:1px solid #e7e7e7;position:fixed;top:50px;left:0;bottom:0;background-color:#f8f8f8;z-index:1020;}
@Media (max-width:768px){.menu2{display:none;}.row {width:100% !important;}}
.view {margin-top:20px;}
.row {margin-right:0px !important;}
.col-sm-12 {float:right !important;}
.systemMenu {width:4% !important;animation: systemMenuMove .6s;}
.routerView {width:96% !important;animation: routerViewMove .6s;}
@keyframes systemMenuMove {from {width:13%;}to {width:4%;}}
@keyframes routerViewMove {from {width:87%;}to {width:96%;}}
.systemMenuAdd {width:13%;animation: systemMenuAdd .6s;}
.routerViewAdd {width:87%;animation: routerViewAdd .6s;}
@keyframes systemMenuAdd {from {width:4%;}to {width:13%;}}
@keyframes routerViewAdd {from {width:96%;}to {width:87%;}}
</style>