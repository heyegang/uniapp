<template>
	<div>
		<view class="box">
			<image src="https://img12.360buyimg.com/img/s1500x886_jfs/t1/115726/22/13102/240974/5f18fb83Ee40e230b/d4f2a67087fd443a.png"
			 mode=""></image>
			<view class="realName"></view>
			<!--  #ifdef  %H5% -->
			<view class="name" @click="login">
				{{name}}
			</view>
			<!--  #endif -->
			<view class="goods">
				<view class="thing">
					<view class="">
						1
					</view>
					<view class="market">
						商品收藏
					</view>
				</view>
				<view class="thing">
					<view class="">
						3
					</view>
					<view class="market">
						店铺收藏
					</view>
				</view>
				<view class="thing">
					<view class="">
						0
					</view>
					<view class="market">
						我的足迹
					</view>
				</view>
			</view>
			<!-- plus -->
			<view class="plus">
				<view class="img"></view>
				<view class="free">
					免费试用立领一张运费券
				</view>
				<view class="trial">
					0元试用
				</view>
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '请登录'
			}
		},
		methods: {
			login() {
				//#ifdef H5
				uni.navigateTo({
					url: '/pages/login/Login'
				})
				//#endif

			}
		},
		mounted() {
			//#ifdef H5
			let uname = JSON.parse(localStorage.getItem("username"))
			if (uname) {
				this.name = uname.name
			}
			//#endif
		}
	}
</script>

<style scoped>
	.box {
		position: relative;
		height: 380rpx;
	}

	image {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.realName {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 20rpx;
		left: 30rpx;
		border-radius: 50%;
		overflow: hidden;
		background: url(https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png);
		background-position: center;
		background-size: cover;
	}

	.name {
		position: absolute;
		top: 30rpx;
		left: 140rpx;
		color: white;
		font-size: 35rpx;
	}

	.goods {
		position: absolute;
		top: 150rpx;
		display: flex;
		width: 100%;
		color: white;
	}

	.thing {
		flex: 1;
		text-align: center;
	}

	.market {
		margin-top: 20rpx;
	}
	.plus{
		position: absolute;
		top: 270rpx;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		width: 90%;
		height: 84rpx;
		background: url(https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png);
		background-size: cover;
		padding-top: 24rpx;
	}
	.img{
		width: 114rpx;
		height: 18rpx;
		margin-left: 20rpx;
		background: url(https://img12.360buyimg.com/img/s113x21_jfs/t1/132167/33/1122/2973/5ed5c74bE41e02c41/5ae83d09fff874cb.png);
		background-size: cover;
		margin-top: 6rpx;
	}
	.free{
		color: #FDE16A;
		font-size: 20rpx;
		margin-left: 40rpx;
	}
	.trial{
		background-color: #FDE16A;
		height: 36rpx;
		width: 140rpx;
		text-align: center;
		margin-left: 60rpx;
		border-radius: 18rpx;
	}
</style>
