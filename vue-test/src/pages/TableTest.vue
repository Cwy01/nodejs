<template>
	<div>

		<h3>TableTest<small>/tt</small></h3>
		<hr/>
		<table id="table" data-url="https://examples.wenzhixin.net.cn/examples/bootstrap_table/data"></table>
		
		
	</div>
</template>

<script>
export default {
	name: "TableTest",
	components: {
	},
	data: {
    },
	mounted(){
		this.init();	
	},
	created(){
	},
	methods: {
		init(){
		
			$('#table').bootstrapTable({
			
				//url="https://examples.wenzhixin.net.cn/examples/bootstrap_table/data",			//请求后台的URL（*）
				//method:'POST',						//请求方式（*）
				//dataType:'json',
				//contentType: "application/x-www-form-urlencoded",
				                    
				toolbar: '#toolbar',                //工具按钮用哪个容器
				striped: true,                      //是否显示行间隔色
				cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true,                   //是否显示分页（*）
				sortable: true,                     //是否启用排序
				sortOrder: "asc",                   //排序方式
				//queryParams: oTableInit.queryParams,//传递参数（*）
				sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
				pageNumber:1,                       //初始化加载第一页，默认第一页
				pageSize: 5,                       //每页的记录行数（*）      
				pageList: "[5, 10, 20, 50, 80, 100, ALL]",				//可供选择的每页的行数（*）
				paginationFirstText: "首页",
				paginationPreText: "上一页",
				paginationNextText: "下一页",
				paginationLastText: "末页",
				search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
				strictSearch: true,
				showColumns: true,                  //是否显示所有的列
				showRefresh: true,                  //是否显示刷新按钮
				minimumCountColumns: 2,             //最少允许的列数
				clickToSelect: true,                //是否启用点击选中行
				//height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
				uniqueId: "id",                     //每一行的唯一标识，一般为主键列
				showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
				cardView: false,                    //是否显示详细视图
				detailView: false,                   //是否显示父子表onEditableSave
				showPaginationSwitch:true,
				showFooter:false,
				showExport: true,                    
				exportDataType: 'all',
				exportTypes:[ 'csv', 'txt', 'sql', 'doc', 'excel', 'xls', 'xlsx', 'pdf'],  //导出文件类型
				
				columns: [{checkbox: true},{title: 'ID',field: 'id'},{title: '姓名',field: 'name'},{title: 'Price',field: 'price'}],
				//data: [{"id": 0,"name": "item0","price": "1,000"},{"id": 1,"name": "item1","price": "2,000"},{"id": 2,"name": "item2","price": "3,000"}],
			})
			
			$(".export .dropdown-menu").addClass("dropdown-menu-right");
		
		}
	}
}
</script>

<style scoped>
</style>