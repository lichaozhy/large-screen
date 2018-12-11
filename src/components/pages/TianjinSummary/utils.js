import tianjinMapGeoJson from '../../../assets/geoJson/tianjin.json';

export const districtList = tianjinMapGeoJson.features.map(feature => feature.properties.name);

export const tradeList = [
	'游戏', '视频', '资讯', '教育', '娱乐', '生活', '体育'
];