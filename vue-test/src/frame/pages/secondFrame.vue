<template>
	<div>
		<h3>secondFrame<small>/secondFrame</small></h3>
		<hr/>
		<div class="col-sm-12" id="myChart"></div>
	</div>
</template>

<script>
export default {
	name: "secondFrame",
	components: {
	},
	data(){
		return{
			data:[{
			"name": "cluster",
				"children": [
					{"name": "AgglomerativeCluster", "value": 3938},
					{"name": "CommunityStructure", "value": 3812},
					{"name": "HierarchicalCluster", "value": 6714},
					{"name": "MergeEdge", "value": 743}
				]
			}]
			
		}
	},
	mounted(){
		this.drawLine();
	},
	methods: {
		drawLine(){
			console.log(this.data);
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
						left: '7%',
						bottom: '1%',
						right: '20%',

						symbolSize: 7,

						label: {
							normal: {
								position: 'left',
								verticalAlign: 'middle',
								align: 'right',
								fontSize: 9
							}
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
						animationDurationUpdate: 750
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