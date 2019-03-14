<template>
<div>
	<h3>frameHome<small>/frameHome</small></h3>
	<hr/>
	<div class="form-group">
		<label for="exampleInputFile">{{ uploadName }}</label>
		<input type="file" @change="getFile($event)" id="exampleInputFile">
		<p class="help-block UploadResult" >{{rMsg}}</p>
		<button type="submit" @click="submit($event)" class="btn btn-default">Submit</button>
	</div>
	<hr/>
	<div>
		<label for="exampleInputFile">{{download.name}}</label>
		<p class="help-block">{{download.msg}}</p>
		<a role="button" :href=download.href @click="downloadRes" class="btn btn-default">{{download.name}}</a>
		<p class="help-block downloadResult">{{download.result}}</p>
	</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
	name : 'frameHome',
	data(){
		return {
			href:"/news/frameMenu",
			file: '',
			uploadName: '文件上传',
			rMsg: 'Result here...',
			download:{
				name: '文件下载',
				msg: 'F:/download/file.zip',
				href:"/file/download/file",
				result:''
			}
		}
	},
	methods: {
		getFile: function (event) {
			this.file = event.target.files[0];
			console.log(this.file);
		},
		submit: function (event) {
			//阻止元素发生默认的行为
			event.preventDefault();
			let formData = new FormData();
			formData.append("file", this.file);
			axios.post('/file/upload/singlefile', formData).then( r => {
				this.rMsg = r.data;
				$(".UploadResult").css("color","red");
			})
		},
		downloadRes: function () {
			this.download.result = "下载成功！";
			$(".downloadResult").css("color","red");
		}
	}
}
</script>
<style scoped>
</style>