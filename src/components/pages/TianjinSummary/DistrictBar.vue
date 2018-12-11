<template>

<ls-panel
	:bordered="true"
	title="各区App数量排名">
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
			categories: districtNameList,
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

const districtNameList = Object.keys(rawData.district).map(code => {
	const district = tianjinMapGeoJson.features.find(district => {
		return district.properties.filename === code;
	});

	return district.properties.fullname;
});

export default {
	data() {
		return {
			districtNameList,
			data: Object.keys(rawData.district).map(code => rawData.district[code].summary.app)
		};
	}
}
</script>
