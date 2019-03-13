<template>
	<div>
		<h3>fouthFrame<small>/fouthFrame</small></h3>
		<hr/>
		<div id="myChart"></div>
	</div>
</template>

<script>
export default {
	name: "fouthFrame",
	components: {
	},
	data(){
		return{
			category:["2019-3-14", "2019-3-15", "2019-3-16", "2019-3-17", "2019-3-18", "2019-3-19", "2019-3-20", "2019-3-21", "2019-3-22", "2019-3-23"],
			lineData:[38,222,139,313,217,143,223,298,257,239],
			barData:[28,112,109,163,197,113,153,198,127,139]
		}
	},
	mounted(){
		//数据初始化
		/*var dottedBase = +new Date();
		for (var i = 0; i < 10; i++) {
			var date = new Date(dottedBase += 3600 * 24 * 1000);
			this.category.push([
				date.getFullYear(),
				date.getMonth() + 1,
				date.getDate()
			].join('-'));
			console.log(this.category);
			var b = Math.random() * 200;
			var d = Math.random() * 200;
			this.barData.push(b)
			this.lineData.push(d + b);
		}*/
		//this.drawLine()
	},
	created(){
		this.initialization()
	},
	methods: {
		initialization() {
			//从后台获取数据
			this.$api.get('../../static/flare.json', {}, r => {
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
				backgroundColor: '#fff',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
						lineStyle: {
							width: 12,
							color: '#777',
							opacity: 0.3,
						},
					}
				},
				legend: {
					data: ['line', 'bar'],
					textStyle: {
						color: '#777'
					}
				},
				xAxis: {
					data: this.category,
					axisLine: {
						lineStyle: {
							color: '#777'
						}
					}
				},
				yAxis: {
					splitLine: {show: false},
					axisLine: {
						lineStyle: {
							color: '#777'
						}
					}
				},
				series: [{
					name: 'line',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					symbol: 'emptyCircle',
					symbolSize: 11,
					color:'#0072ff',
					data: this.lineData
				}, {
					name: 'bar',
					type: 'bar',
					barWidth: 10,
					itemStyle: {
						normal: {
							barBorderRadius: 5,
							color: new this.$echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#59bcff'},
									{offset: 1, color: '#19a2ff'}
								]
							)
						}
					},
					data: this.barData
				}, {
					name: 'line',
					type: 'bar',
					barGap: '-100%',
					barWidth: 10,
					itemStyle: {
						normal: {
							color: new this.$echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: 'rgba(20,200,212,0.6)'},
									{offset: 0.2, color: 'rgba(20,200,212,0.4)'},
									{offset: 1, color: 'rgba(20,200,212,0)'}
								]
							)
						}
					},
					z: -12,
					data: this.lineData
				}, {
					name: 'dotted',
					type: 'pictorialBar',
					symbol: 'rect',
					itemStyle: {
						normal: {
							color: '#ffffff'
						}
					},
					symbolRepeat: true,
					symbolSize: [12, 4],
					symbolMargin: 1,
					z: -10,
					data: this.lineData
				}]
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