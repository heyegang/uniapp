<template>
	<div class="container">
		<view class="box">
			
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr:[
					{
						name:'代付款',
						img:'https://img12.360buyimg.com/img/s60x60_jfs/t1/125209/17/7530/933/5f16524bE43b4a5f7/71971b102d1fcbc5.png',
						
					},
					{
						name:'待收货',
						img:'https://img12.360buyimg.com/img/s120x120_jfs/t1/123660/33/7797/4674/5f1804aeE308173db/b392f9ce63eb8490.png',
						
					},
					{
						name:'退换/售后',
						img:'https://img12.360buyimg.com/img/s60x60_jfs/t1/120478/38/7592/2211/5f165256E02190e99/1491d4cb340074bb.png',
						
					},
					{
						name:'全部订单',
						img:'https://img12.360buyimg.com/img/s60x60_jfs/t1/145618/2/3439/692/5f16525eE30cd2db1/3ab434ec2686a256.png',
						
					}
				]
			}
		},
	}
</script>

<style scoped>
	.container {
		height: 180rpx;
		background-color: #F7F7F7;
	}

	.box {
		height: 160rpx;
		border: 1rpx solid #000;
		transform: translate(0, -20rpx);
		border-radius: 15rpx;
		background-color: #fff;
	}
</style>
