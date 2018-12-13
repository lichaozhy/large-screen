<template>

<ls-panel
	:bordered="true"
	title="各分类App漏洞数量排名">
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
import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';
import rawData from '../../../assets/data.json';

const codeList = Object.keys(rawData.district);
const riskTradeTotalList = rawData.dict.trade.map((category, index) => {
	let total = 0;
	
	codeList.forEach(code => {
		total += rawData.district[code].risk[index];
	});

	return total;
});

export default {
	data() {
		const code = this.$route.params.name;

		return {
			tradeList: rawData.dict.trade,
			data: rawData.district[code].risk
		};
	}
}
</script>
