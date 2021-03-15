<template>
	<div>
		<button type="default" @click="handle">按钮</button>
	</div>
</template>

<script>
	export default {
		methods:{
			handle(){
				uni.navigateTo({
					url:"../login/Login"
				})
			}
		}
	}
</script>

<style scoped>

</style>