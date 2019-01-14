<template>
<div>
	<h3>JQtest<small>/jq</small></h3>
	<hr/>
	<div class="Jqtest">
		<p>请点击按钮</p>
		<button class="btn btn-default" @click="testJQ">测试 jquery 是否正常</button>
	</div>
</div>
</template>

<script>
export default {
	name : "JQtest",
	methods: {
		testJQ () {
			$('.Jqtest p').html('jquery 运行正常！')
		}
	}
}
</script>