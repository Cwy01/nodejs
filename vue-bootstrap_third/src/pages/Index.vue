<template>

	<div>
		<ol class="breadcrumb">
			<li role="presentation" v-for="menu in menus">
				<router-link :to="menu.href">{{menu.name}}</router-link>
			</li>
		</ol>
		<h3>Index<small>/index</small></h3>
		
			<div class="btn-group" role="group" aria-label="123">
				<a class="btn btn-default"  @click="toAdd"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 添加</a> 
				<a class="btn btn-default"  @click="toSave"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span> 修改</a> 
				<a class="btn btn-default"  @click="toRemove"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 删除</a>
				<a class="btn btn-default"  @click="toUpdate"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> 更新</a>
			</div>
		<hr/>
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
						<td role="presentation" v-for="child in tbodys.childs"  v-if="tbodys.childs">
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
                name:"HomeOne",
                href:"/home",
                childs:[{
					name:"HomeOne",
					href:"/home"
				},
				{
					name:"Home2",
					href:"/home"
				},
				{
					name:"Home3",
					href:"/home"
				},
				{
					name:"Home4",
					href:"/home"
				}]
            },
			{
				thead:"HeadTwo",
                thref:"/HeadTwo",
                name:"Two1",
                href:"/home",
                childs:[{
					name:"Two1",
					href:"/home"
				},
				{
					name:"Two2",
					href:"/home"
				},
				{
					name:"Two3",
					href:"/home"
				},
				{
					name:"Two4",
					href:"/home"
				}]
            },
			{
				thead:"Head3",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"Three1",
					href:"/home"
				},
				{
					name:"Three2",
					href:"/home"
				},
				{
					name:"Three3",
					href:"/home"
				},
				{
					name:"Three4",
					href:"/home"
				}]
            },
			{
				thead:"Head4",
                thref:"/HeadOne",
                name:"Home1",
                href:"/home",
                childs:[{
					name:"four1",
					href:"/home"
				},
				{
					name:"four2",
					href:"/home"
				},
				{
					name:"four3",
					href:"/home"
				},
				{
					name:"four4",
					href:"/home"
				}]
            }]
            
			
        }
    },
	methods: {
		toAdd(){
			alert("添加");
		},
		toSave(){
			alert("修改");
		},
		toRemove(){
			alert("删除");
		},
		toUpdate(){
			alert("更新");
		}
	}
}
</script>