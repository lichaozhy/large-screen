<template>

<b-container fluid id="ls-country" class="h-100 p-0">
	<div class="ls-grid h-100"
		style="float:left;width: 70%">
		<chinese-map />
	</div>

	<div class="ls-grid"
		v-for="(panel, index) in chartPanelList"
		:key="index"
		:style="{
			height: `${panel.height}%`
		}"
		style="float:right;width: 30%">
		<component :is="panel.component" />
	</div>
</b-container>

</template>

<script>
import ChineseMap from './Map';
import MonthChart from './MonthChart';
import SafeIndex from './SafeIndex';
import AppNumber from './AppNumber';

export default {
	components: {
		ChineseMap
	},
	data() {
		return {
			chartPanelList: [
				{
					component: AppNumber,
					height: 20
				},
				{
					component: MonthChart,
					height: 40
				},
				{
					component: SafeIndex,
					height: 40
				}
			]
		};
	}
}
</script>

<style lang="less">
</style>

