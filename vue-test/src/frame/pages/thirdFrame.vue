<template>
	<div>
		<h3>thirdFrame<small>/thirdFrame</small></h3>
		<hr/>
		<div id="myChart"></div>
	</div>
</template>

<script>
import axios from "axios";
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
		
		//this.drawLine()
	},
	created(){
		this.initialization()
	},
	methods: {
		initialization() {
			//从后台获取数据
			this.$api.get('/../../static/flare2.json', {}, r => {
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
		width:800px;
		height:400px;
	}
</style>