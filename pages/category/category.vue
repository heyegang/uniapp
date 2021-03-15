<template>
	<!-- 分类 -->
	<view>
		<!-- 顶部搜索栏 -->
		<view class="box flex">
			<!-- #ifdef H5 -->
			<u-icon class="icon" @click="show = false" name="arrow-left" size="45" color="#61636D"></u-icon>
			<!-- #endif -->
			<u-search @focus="show = true" class="sea" placeholder="零食" v-model="keyword" :show-action="false"></u-search>
		</view>
		<!-- 下方分类 -->
		<view class="card">
			<view>
				<u-popup v-model="show" mode="bottom">
					<view class="pop">
						<view style="font-weight: bold;">
							热门搜索
						</view>
					</view>
				</u-popup>
			</view>
			<view class="tex">
				<view class="te-cer" v-for="(item,index) in arr" :key="index">
					<view class="nav" style="background-color: #F8F8F8;" :class="{'active':flag===index}" @click="Flag(index)">
						{{item.title}}
					</view>
				</view>
			</view>
			<view v-for="(item,index) in arr" :key="index" class="hex" v-if="flag===index">
				<view class="dex" v-for="(item,index) in item.children" :key="index">
					<view style="font-weight: bold;padding-left: 10rpx;padding-top: 10rpx">
						{{item.title}}
					</view>
					<view class="flex">
						<view class="iex flex" @click="select(item)" v-for="(item,index) in item.children" :key="index">
							<image class="img" :src="item.img"></image>
							<view class="goods te-cer">
								{{item.title}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				arr: [],
				flag: 0,
				show: false
			}
		},
		methods: {
			Flag(index) {
				this.flag = index;
				// console.log(this.flag)
			},
			select(item) {
				this.keyword = item.title;
				// console.log(this.keyword)
			}
		},
		onLoad() {
			uni.request({
				url: 'http://localhost:7001/user/category',
				method: 'GET',
				data: {},
				success: res => {
					this.arr = res.data.res
					console.log(this.arr)
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	.pop {
		height: 1210rpx;
		position: relative;
		padding: 30rpx 20rpx;
	}

	.active {
		background-color: #FFFFFF !important;
	}

	.tex {
		width: 180rpx;
		height: 1104rpx;
		overflow: scroll;
	}

	.hex {
		position: absolute;
		left: 180rpx;
		top: 0;
		height: 1104rpx;
		overflow: scroll;
		width: 76%;
	}

	.card {
		width: 100%;
		font-size: 32rpx;
		position: fixed;
		left: 0;
		top: 130rpx;
	}

	.nav {
		height: 80rpx;
		width: 180rpx;
		line-height: 80rpx;
		border-bottom: 1px solid #DDDDDD;
		border-right: 1px solid #DDDDDD;
	}

	.dex {
		text-align: left;
	}

	.iex {
		width: 33.3%;
	}

	.img {
		width: 190rpx;
		height: 190rpx;
	}

	.goods {
		height: 60rpx;
		width: 100%;
		line-height: 60rpx;
	}

	/* #ifdef H5 */
	.box {
		height: 130rpx;
		width: 100%;
		line-height: 130rpx;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		background-color: #FFFFFF;
		border-bottom: 1px solid #E5E5E5;
	}

	.icon {
		position: absolute;
		left: 2%;
		top: 35%;
	}

	.sea {
		width: 80%;
		position: absolute;
		left: 10%;
	}

	/* #endif */
	/* #ifdef MP-WEIXIN*/
	.box {
		height: 130rpx;
		width: 100%;
		border-bottom: 1px solid #DDDDDD;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		background-color: #FFFFFF !important;
	}

	.sea {
		width: 500rpx;
		position: absolute;
		left: 20rpx;
		top: 50rpx;
	}

	/* #endif */
</style>
