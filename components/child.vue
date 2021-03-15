<template>
	<div>
		<view class="box">
			<view class="icon" @click="handle">
				<u-icon name="arrow-left" color="#5D5F6A" size="40"></u-icon>
			</view>
			<view class="title">
				我的京东
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		methods: {
			handle() {
				uni.switchTab({
					url: '/pages/home/home'
				});
			}
		}
	}
</script>

<style scoped>
	.box {
		display: flex;
		height: 88rpx;
		margin-top: 10rpx;
		line-height: 88rpx;
	}

	.title {
		font-size: 40rpx;
		color: #333333;
		margin-left: 248rpx;
	}
</style>
