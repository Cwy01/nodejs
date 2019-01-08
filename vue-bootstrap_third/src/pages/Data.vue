<template>
	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
		<h3>Demo Data</h3>
				<div class="dropdown">
			<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Dropdown
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
				<li class="dropdown-header">Dropdown header</li>
				<li><a href="#">Action</a></li>
				<li><a href="#">Another action</a></li>
				<li role="separator" class="divider"></li>
				<li><a href="#">Separated link</a></li>
				<li class="disabled"><a href="#">Disabled link</a></li>
			</ul>
		</div>
		<a class="btn btn-familly" href="#" role="button">Link</a>
		  <div class="love">
			<p>这里是初始文字</p>
			<button @click="testJQ">看看 jquery 有没有工作</button>
		  </div>


	</div>

</template>
<script>
export default {

    name : "Menu",
    data(){
        return {
            menus:[{
                name:"Home",
                href:"/home",
                childs:[]
            },{
                name:"Library",
                href:"/home/library",
                childs:[]
            },{
                name:"Data",
                href:"/home/library/data",
                childs:[]
            }]
        }
    },
  methods: {
    testJQ () {
      $('.love p').html('jquery 工作正常！')
    }
  }
}
</script>