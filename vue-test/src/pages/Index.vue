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
			<a class="btn btn-default" @click="toAdd">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 刷新
			</a> 
			<a class="btn btn-default" data-toggle="modal" data-target="#myModal">		
				<span type="button" class="glyphicon glyphicon-repeat" aria-hidden="true" ></span> 保存
			</a> 
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 class="modal-title" id="myModalLabel">保存</h4>
							</div>
							<div class="modal-body">
								<div class="row input-xs">
									<div class="col-xs-2 form-control-static">标题：</div>
									<div class="col-xs-10">
										<input id="title" type="text" class="form-control" placeholder="第七章" v-model:value="article.title"/>
									</div>
									<div class="col-xs-2 form-control-static">作者：</div>
									<div class="col-xs-10">
										<input id="loginname" type="text" class="form-control" placeholder="Tony" v-model:value="article.author"/>
									</div>
									<div class="col-xs-2 form-control-static">文章：</div>
									<div class="col-xs-10">
										<input id="content" type="text" class="form-control" placeholder="第七章 Vuex使用" v-model:value="article.content"/>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
								<button type="button" class="btn btn-primary" data-dismiss="modal" @click="toSave">确定</button>
							</div>
						</div>
					</div>
				</div>
			
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
			article:{
				title:"第七章 Vuex使用",
				create_at:"2019-01-14T11:55:26.501Z",
				author:"Tony",
                content:"第七章 Vuex使用",
                id:"0007"
			},
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
			this.$api.get('topics', null, r => {
				console.log(r);
				if(r.success){
					this.tableItem = r.data;
					alert("刷新成功！");
				}
			})
			console.log("刷新");
		},
		toSave(){
			this.$api.post('topics', this.article, r => {
				console.log(r);
				if(r.success){
					this.tableItem = r.data;
					alert("保存成功！");
				}
			})
			console.log("保存");
		},
		toRemove(){
			this.$api.delete('topics', null, r => {
				console.log(r);
				if(r.success){
					this.tableItem = r.data;
					alert("删除成功！");
				}
			})
			console.log("删除");
		},
		toUpdate(){
			this.$api.put('topics', null, r => {
				console.log(r);
				if(r.success){
					this.tableItem = r.data;
					alert("更新成功！");
				}
			})
			console.log("更新");
		}
	}	
}
</script>