<template>
	<div class="admin-content">
		<h2 v-text="article.title"></h2>
		<p>作者：{{article.author.loginname}}　　发表于：{{article.create_at}}</p>
		<hr>
		<article v-html="article.content"></article>
	</div>
</template>
<script>
export default {
	name : "Content",
	data () {
		return {
			id: this.$route.params.id,
			article: {
				author: {
					loginname:""
				}
			}
		}
	},
	created () {
		this.getData();
	},
	methods: {
		getData () {
			this.$api.get('topic/' + this.id, null, r => {
				console.log(r.data);
				this.article = r.data;
			})
		}
	}
}
</script>