<template>

	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
		<h3>Demo Index</h3>
		<div class="table-responsive">
			<table class="table table-striped table-bordered table-hover table-condensed">
				<!-- On rows -->
				<thead>
					<tr>
						<td role="presentation" v-for="theads in tbodylist">
							<router-link :to="theads.thref">{{theads.thead}}</router-link>
						</td>
					</tr>
				</thead>
				
				<tbody>
					<tr class="" v-for="tbodys in tbodylist">
						<td role="presentation" v-for="child in tbodys.childs">
							<router-link :to="child.href">{{child.name}}</router-link>
						</td>
					</tr>
				</tbody>
				
			</table>
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
            }],
			
			tbodylist:[{
				thead:"HeadOne",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				}]
            },
			{
				thead:"HeadOne",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				}]
            },
			{
				thead:"HeadOne",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				}]
            },
			{
				thead:"HeadOne",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				}]
            },
			{
				thead:"HeadOne",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				},
				{
					name:"Home1",
					href:"/home"
				}]
            }]
            
			
        }
    }
}
</script>