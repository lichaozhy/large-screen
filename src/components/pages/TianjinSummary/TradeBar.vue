<template>

<ls-panel
	:bordered="true"
	title="全市App分类">
	<chart-bar
		:series="[{
			data: data,
			name: '共'
		}]"
		:y-axis="{
			gridLineWidth: 0,
			title: { text: null },
			labels: { enabled: false }
		}"
		:x-axis="{
			categories: tradeList,
			labels: {
				style: {
					color: '#fff'
				}
			}
		}" />
</ls-panel>

</template>

<script>
import rawData from '../../../assets/data.json';

export default {
	data() {
		return {
			tradeList: rawData.dict.trade,
			data: rawData.tianjin.summary.trade
		};
	}
}
</script>
