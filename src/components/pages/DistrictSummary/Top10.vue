<template>

<ls-panel
	:bordered="true"
	title="全区App下载量Top10">
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
			categories: appNameList,
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
		const { download } =  rawData.district[this.$route.params.name];

		const appNameList = download.map(data => data.name);
		const downloadNumber = download.map(data => data.number);

		return {
			appNameList,
			data: downloadNumber
		};
	}
}
</script>
