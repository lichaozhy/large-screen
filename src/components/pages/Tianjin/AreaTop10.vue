<template>

<ls-panel
	:title="`各区 - TOP10 应用&amp;安全性 - <${districtList[index]}>`">
	<b-carousel id="carousel1"
		style="text-shadow: 1px 1px 2px #333;height: 100%"
		controls
		indicators
		background="transparent"
		:interval="5000"
		v-model="index">

		<b-carousel-slide class="ls-city-district-top10"
			v-for="(district, index) in districtAppList"
			:key="index">
			<b-button v-for="(app, index) in district.appList"
				:key="district.name+index"
				variant="link"
				size="lg">
				{{app.name}}
				<i v-if="!app.safe" class="fas fa-exclamation-triangle"></i>
				<i v-if="app.safe" class="fas fa-shield-alt"></i>
			</b-button>
		</b-carousel-slide>

    </b-carousel>
</ls-panel>

</template>

<script>
import { randRage } from '../../utils/random';
import { districtList } from './utils';

const data = districtList.map(name => name);

const appNameList = [
	'动态壁纸', '去哪网攻略', '科普中国', '智慧家园', '录音宝',
	'孩子画画', 'QQ', '微信', '支付宝', '大街网'
];

export default {
	data() {
		return {
			index: 0,
			districtList: districtList.slice(0),
			districtAppList: districtList.map(name => {
				return {
					name,
					appList: new Array(10).fill(0).map((_, index) => {
						return {
							name: appNameList[index],
							safe: Math.random() > 0.2
						}
					})
				};
			})
		};
	}
}
</script>

<style lang="less">
.ls-city-district-top10 {
	color: #fff;
	height: 100%;
	width: 100%;
}
.carousel-inner {
	height: 100%;
	button {
		color:#fff;
	}
}
</style>
