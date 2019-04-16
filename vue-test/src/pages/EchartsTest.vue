<template>
	<div>
		
	<h3>EchartsTest<small>/ec</small></h3>
	<hr/>
	
	<div class="col-sm-12" id="myChart"></div>
	
	</div>
</template>

<script>
export default {
	name: "ChartsView",
	components: {
	},
	data(){
		return{
			data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		}
	},
	mounted(){
		//this.init();
		this.drawLine();
	},
	created(){
	},
	methods: {
		init(){
			//this.data = ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'];
			this.drawLine();
		},
		drawLine(){
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data:this.data
				},
				series: [{
					name:'访问来源',
					type:'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1548, name:'搜索引擎'}
					]
				}]
			});
		},
	}
}
</script>



<style scoped>
  #myChart{
    color: white;
	//width:400px;
	height:400px;
  }
</style>