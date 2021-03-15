<template>
	<div>
		<!-- 顶部标题 -->
		<child></child>
		<!-- 我的详细信息 -->
		<news></news>
		<!-- 操作 -->
		<operation></operation>
	</div>
</template>

<script>
	import child from '../../components/child.vue'
	import news from '../../components/news.vue'
	import operation from '../../components/Operation.vue'
	export default {
		components:{
			child,news,operation
		},
		methods:{
			
		}
	}
</script>

<style scoped>

</style>
