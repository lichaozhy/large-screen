<template>

<ls-panel
	id="top10-app"
	:title="`TOP10 APP - ${current}`">
	<b-table striped hover
		small
		:fields="[
			{ key: 'index', label: '排名' },
			{ key: 'name', label: 'App名称' },
			{ key: 'safe', label: '安全?' },
		]"
		:items="districtAppMap[current]">
		
		<template slot="index" slot-scope="data">{{data.index+1}}</template>
		<template slot="safe" slot-scope="data">{{data.item.safe ? '√' : ''}}</template>
		</b-table>

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
		const districtAppMap = {};

		districtList.forEach(name => {
			districtAppMap[name] = new Array(10).fill(0).map((_, index) => {
				return {
					name: appNameList[index],
					safe: Math.random() > 0.2
				}
			})
		});

		return {
			current: '和平区',
			districtAppMap
		};
	},
	methods: {
		select(districtName) {
			this.current = districtName;
		}
	}
}
</script>

<style lang="less">
#top10-app {
	table {
		color: #fff;
		font-size: 15px;
	}
}
</style>
