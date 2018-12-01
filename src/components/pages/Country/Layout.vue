<template>

<b-container fluid id="ls-country" class="h-100 p-0">
	<div class="ls-grid h-100 w-75"
		style="float:left">
		<chinese-map />
	</div>

	<div class="ls-grid w-25"
		v-for="(panel, index) in chartPanelList"
		:key="index"
		:style="{
			height: `${100/chartPanelList.length}%`
		}"
		style="float:right">
		<component :is="panel" />
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
				AppNumber, MonthChart, SafeIndex
			]
		};
	}
}
</script>

<style lang="less">
</style>

