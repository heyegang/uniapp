<template>
	<view class="">
		<u-form :model="form" ref="uForm" label-width="160rpx" label-align=right :required="true">
			<view class="name">
				<u-form-item label="用户名" prop="name">
					<u-input v-model="form.name" placeholder="请输入用户名" />
				</u-form-item>
			</view>
			<view class="name">
				<u-form-item label="密码" prop="password">
					<u-input v-model="form.password" type="password" placeholder="请输入密码" />
				</u-form-item>
			</view>

			<view class="box">
				<u-form-item label="验证码" prop="verify">
					<u-input v-model="form.verify" placeholder="请输入验证码" />
				</u-form-item>
				<view class="verify" v-html=verify @click="getVerify">
				</view>
			</view>

			<view class="box" @click="getModdle">
				<u-form-item label="手机验证码" prop="moddle">
					<u-input v-model="form.moddle" placeholder="请输入手机验证码" />
				</u-form-item>
				<view class="verifys">
					获取手机验证码
				</view>
			</view>
		</u-form>
		<u-button @click="submit">登录</u-button>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				verify: '',

				form: {
					name: '',
					password: '',
					verify: '',
					moddle: '',
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['change', 'blur'],
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur',
					}],
					verify: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur',
					}],
					moddle: [{
						required: true,
						message: '请输入手机验证码',
						trigger: 'blur',
					}]
				}
			};
		},
		methods: {
			// 获取手机验证码============================================================================
			getModdle() {
				console.log(111)
			},
			// 获取验证码=================================================================================
			getVerify() {
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: 'api/captcha',
					method: 'GET',
					data: {},
					success: res => {
						this.verify = res.data.data
					},
					fail: () => {},
					complete: () => {
						uni.hideLoading()
					}
				});
			},
			//登录 ============================================================================
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.showLoading({
							title: "加载中..."
						})
						uni.request({
							url: 'api/user/login',
							method: 'POST',
							data: {
								username: this.form.name,
								password: this.form.password,
								code: this.form.verify
							},
							success: res => {
								console.log(res)
								localStorage.setItem("username", JSON.stringify({
									name: this.form.name
								}))

								uni.switchTab({
									url: '../home/home'
								})

								this.$refs.uToast.show({
									title: '登录成功',
									type: 'success',
								})
							},
							fail: () => {},
							complete: () => {
								uni.hideLoading()
							}
						});
					} else {
						console.log('验证失败');
					}
				});
			}
		},
		mounted() {
			this.getVerify()
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style scoped lang="scss">
	.name {
		height: 130rpx;
		margin-top: 40rpx;
	}

	.box {
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
		height: 150rpx;
	}

	.verify {
		width: 200rpx;
		height: 100rpx;
		margin-top: 20rpx;
	}

	.verifys {
		width: 200rpx;
		height: 50rpx;
		margin-top: 30rpx;
		color: skyblue;
	}
</style>
