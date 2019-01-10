<template>
	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
	<h3>JQtest<small>/jq</small></h3>

	<div class="jqtest">
		<p>这里是初始文字</p>
		<button class="btn btn-primary" @click="testJQ">看看 jquery 有没有工作</button>
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
      $('.jqtest p').html('jquery 工作正常！')
    }
  }
}
</script>