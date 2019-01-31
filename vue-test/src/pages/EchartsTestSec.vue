<template>
	<div>
		<h3>EchartsTestSec<small>/ecs</small></h3>
		<hr/>
		<div id="myChart"></div>
	</div>
</template>

<script>
export default {
	name: "ChartsView",
	components: {
	},
	data(){
		return{
			data: []
		}
	},
	mounted(){	
	},
	created(){
		this.initialization()
	},
	methods: {
		initialization() {
			//从后台获取数据
			this.$api.get('pieDatas', {page:1,limit:8}, r => {
				console.log(r);
				if(r.success){
					this.data = r.data;
					this.drawLine();
				}
			})
		},
		drawLine(){
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// 绘制图表
			var option = {
				title : {
					text: '环状统计图',
					subtext: 'ver:1.0.0',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left'
				},
				series : [
					{
						name: 'AllData',
						type: 'pie',
						radius : ['50%', '70%'],
						center: ['50%', '60%'],
						data: this.data,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};
			myChart.setOption(option);
		},
	}
}
</script>

<style scoped>
	#myChart{
		color: white;
		width:800px;
		height:400px;
	}
</style>