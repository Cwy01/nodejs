<template>

    <nav class="navbar-default">
		<div class="col-xs-5"></div>
		<div class="col-xs-2">	
			<div class="navbar-header">
				<ul class="nav navbar-nav navbar-right">
					<li role="presentation" v-for="menu in menus">
						<router-link :to="menu.href" class="text-center">{{menu.name}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="col-xs-5"></div>
	</nav>

</template>

<script>
export default{
	name : "Link",
    data(){
        return {
            menus:[{
                name:" Copy Right @ 2019 ",
                href:"/home"
            }]
        }
    }
}
</script>
<style>
</style>
</script>
<style  scoped>

</style>

