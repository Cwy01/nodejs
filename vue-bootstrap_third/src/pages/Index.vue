<template>

	<div class="container-fluid">
		<ol class="breadcrumb">
		  <li><a href="#">Home</a></li>
		  <li><a href="#">Library</a></li>
		  <li class="active">Data</li>
		</ol>
		<h3>Demo Index</h3>
		<a class="btn btn-familly" href="#" role="button">Link</a>
		  <div class="love">
			<p>这里是初始文字</p>
			<button @click="testJQ">看看 jquery 有没有工作</button>
		  </div>
		

	</div>

</template>
<script>
export default {
  methods: {
    testJQ () {
      $('.love p').html('jquery 工作正常！')
    }
  }
}
</script>