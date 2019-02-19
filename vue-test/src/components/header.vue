<template>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link :to="icon.href" class="navbar-brand">
					<span class="glyphicon glyphicon-cloud" aria-hidden="true"></span>
				</router-link>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				
				<ul class="nav navbar-nav">
					<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu 
						<span class="caret"></span>
					</a>
						<ul class="dropdown-menu">
							<li><router-link :to="icon.href">
								<span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>&nbsp;首页
							</router-link></li>
							<li role="separator" class="divider"></li>
							<li v-for="menu in menus">
								<router-link :to="menu.href"><span v-bind:class="menu.setClass" class="glyphicon" aria-hidden="true"></span>&nbsp;{{menu.name}}</router-link>
							</li>
						</ul>
					</li>
				</ul>
				
				<div class="navbar-right">
					<form class="navbar-form navbar-left">
						<div class="form-group input-group">
						<input type="text" class="form-control" id="search" placeholder="Search for...">
						<span class="input-group-btn">
							<a class="btn btn-default" type="button">
								<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							</a>
						</span>
						</div>
					</form>	
					<ul class="nav navbar-nav navbar-header">
						<li>
							<router-link :to="icon.href">
								<span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>&nbsp;Login
							</router-link>
						</li>
					</ul>
				</div>
				
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>
</template>

<script>
export default{
    name : "Header",
    data(){
        return {
			icon:{
				href:"/"
			},
            menus:[{
                name:"展开",
                href:"#collapseOne",
				heading:"headingOne",
				collapse:"collapseOne",
				setClass:"glyphicon-home",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
                childs:[{
                    name:"Home",
					href:"/home",
					setClass:"glyphicon-home",
                },{
                    name:"Index",
                    href:"/",
					setClass:"glyphicon-globe"
                }]
            },{
                name:"JqueryTest",
                href:"#collapseTwo",
				heading:"headingTwo",
				collapse:"collapseTwo",
				setClass:"glyphicon-grain",
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				
                childs:[{
                    name:"jq",
					href:"/jq",
					setClass:"glyphicon-grain",
                }]
            },{
                name:"headingThree",
                href:"#collapseThree",
				heading:"headingThree",
				collapse:"collapseThree",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
				childs:[{
                    name:"Home",
					href:"/home",
					setClass:"glyphicon-home",
                }]
            },{
                name:"EchartsTest",
                href:"/ec",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },{
                name:"TableTest",
                href:"/tt",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },{
                name:"EchartsTestSec",
                href:"/ecs",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            },{
                name:"TableTestSec",
                href:"/tts",
				setClass:"glyphicon-grain",				
				menuClass:"glyphicon-menu-down list",
				menuView:false,
            }]
        
        }
    }
}
</script>

<style>
body {padding-top: 50px;}
</style>
