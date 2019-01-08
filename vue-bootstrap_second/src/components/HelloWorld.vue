<template>
    <nav class="navbar navbar-default navbar-fixed-bottom">
			<div class="container-fluid">
				<p class="text-center">Center aligned text.</p>
			</div><!-- /.container-fluid -->
		</nav>
</template>

<script>
export default{
    name : "Menu",
    data(){
        return {
            menus:[{
                name:"首页",
                href:"/",
                childs:[]
            },{
                name:"写信",
                href:"/",
                childs:[]
            },{
                name:"收件箱",
                href:"/",
                childs:[]
            },{
                name:"发件箱",
                href:"/jq",
                childs:[]
            },{
                name:"垃圾箱",
                href:"/",
                childs:[]
            },{
                name:"草稿箱",
                href:"/",
                childs:[]
            }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body { padding-bottom: 70px; }
</style>
