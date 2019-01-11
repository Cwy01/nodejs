<template>
    <nav class="navbar-default">
		<div class="navbar-header col-xs-12">
			<ul class="nav navbar-nav col-xs-12">
				<li role="presentation" class="col-xs-12" v-for="menu in menus">
					<router-link :to="menu.href" class="text-center">{{menu.name}}</router-link>
				</li>
			</ul>
		</div>
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

