<template>
  <div ref="container" class="h-100 w-100 position-absolute ls-map"></div>
</template>

<script>
import Highcharts from "highcharts";

const DEFAULT_OPTIONS = {
  title: {
    text: null
	},
	credits: {
		enabled: false
	},
	chart: {
		type: 'line',
		backgroundColor: null
	},
	plotOptions: {
		line: {
			dataLabels: {
				// 开启数据标签
				enabled: true          
			},
		}
	},
	legend: {
		enabled: false
	}
};

export default {
  data() {
    return {};
  },
  props: {
		series: {
			type: Array,
			default() {
				return [];
			}
		},
		yAxis: {
			type: Object
		},
		xAxis: {},
		title: {

		}
  },
  methods: {
    render() {
			const mixedOptions = Object.assign({}, DEFAULT_OPTIONS, {
				series: this.series,
				yAxis: this.yAxis,
				xAxis: this.xAxis,
				title: this.title
			});

      this.map = new Highcharts.Chart(this.$refs.container, mixedOptions);
    }
  },
  mounted() {
    this.render();
  }
};
</script>

<style lang="less">
.ls-map {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
