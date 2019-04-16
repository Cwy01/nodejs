<template>
	<div>
		<h3>thirdFrame<small>/thirdFrame</small></h3>
		<hr/>
		<div class="col-sm-12" id="myChart"></div>
	</div>
</template>

<script>
export default {
	name: "thirdFrame",
	components: {
	},
	data(){
		return{
			data:[]
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
			this.$api.get('../../static/json/flare.json', {}, r => {
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
				tooltip: {
					trigger: 'item',
					triggerOn: 'mousemove'
				},
				series: [
					{
						type: 'tree',
						data: this.data,
						top: '1%',
						left: '28%',
						bottom: '1%',
						right: '28%',
						symbolSize: 7,
						label: {
							normal: {
								position: 'left',
								verticalAlign: 'middle',
								align: 'right',
								fontSize: 14
							}
						},
						lineStyle:{
							color: '#90d2ff',
							width: 1.6,
							curveness: 0.3,
						},
						itemStyle:{
							color: '#90d2ff',
							borderColor: '#0e9dff',
						},
						leaves: {
							label: {
								normal: {
									position: 'right',
									verticalAlign: 'middle',
									align: 'left'
								}
							}
						},
						expandAndCollapse: true,
						animationDuration: 550,
						animationDurationUpdate: 750,
						//显示页子节点的层级
						initialTreeDepth: 1,
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
		//width:800px;
		height:400px;
	}
</style>