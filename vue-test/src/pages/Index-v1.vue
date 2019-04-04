<template>
<div>
	<ol class="breadcrumb">
		<li role="presentation" v-for="menu in menus">
			<router-link :to="menu.href">{{menu.name}}</router-link>
		</li>
	</ol>
	<h3>Index<small>/index</small></h3>
	<hr/>
		<div class="btn-group" role="group" aria-label="123">
			<a class="btn btn-default"  @click="toAdd"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 添加</a> 
			<a class="btn btn-default"  @click="toSave"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span> 修改</a> 
			<a class="btn btn-default"  @click="toRemove"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 删除</a>
			<a class="btn btn-default"  @click="toUpdate"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> 更新</a>
		</div>
	<p></p>
	<div class="table-responsive">
		<table class="table table-striped table-bordered table-hover table-condensed">
			<thead>
				<tr>
					<td role="presentation" v-for="theads in tbodylist">
						<router-link :to="theads.thref">{{theads.thead}}</router-link>
					</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in tableItem">
					<td>{{index + 1}}</td>
					<td role="presentation">
						<router-link :to="'/Content/' + item.id">{{item.title}}</router-link>
					</td>
					<!-- <td>{{item.create_at}}</td> -->
					<td>
						<time v-text="$utils.goodTime(item.create_at)"></time>
					</td>
				</tr>
			</tbody>
		</table>
	</div>	
</div>
</template>

<script>
export default {
    name : "Index",
    data(){
		
        return {
			tableItem: [],
            menus:[{
                name:"Home",
                href:"/home",
                childs:[]
            },{
                name:"Index",
                href:"/",
                childs:[]
            }],
			tbodylist:[
			{
				thead:"index",
                thref:"/",
            },
			{
				thead:"title",
                thref:"/",
            },
			{
				thead:"create_at",
                thref:"/",
            }]
        }
	},
	created(){
		this.initialization()
	},
	methods: {
		initialization() {
			this.$api.get('topics', {page:1,limit:8}, r => {
				console.log(r);
				if(r.success){
					this.tableItem = r.data;
				}
			})
		},
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