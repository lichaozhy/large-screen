<template>
  <div ref="container" class="h-100 w-100 ls-map"></div>
</template>

<script>
import Highcharts from "highcharts";

Highcharts.getOptions().plotOptions.pie.colors = (function () {
	var colors = [],
		base = Highcharts.getOptions().colors[0],
		i;
	for (i = 0; i < 16; i += 1) {
		// Start out with a darkened base color (negative brighten), and end
		// up with a much brighter color
		colors.push(Highcharts.Color(base).brighten((i - 10) / 20).get());
	}
	return colors;
}());

const DEFAULT_OPTIONS = {
  title: {
    text: null
	},
	credits: {
		enabled: false
	},
	chart: {
		type: 'pie',
		// type: 'variablepie',
		backgroundColor: null
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '{point.name}: {point.percentage:.1f} %',
				style: {
					color: '#fff',
					fontSize: '14px'
				}
			},
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		enabled: true,
		itemStyle: {
			color: '#fff',
			fontWeight: 'bold'
		},
		itemHiddenStyle: {
			color: '#000'
		},
		navigation: {
			activeColor: '#3E576F',
			animation: true,
			arrowSize: 12,
			inactiveColor: '#CCC',
			style: {
				fontWeight: 'bold',
				color: '#333',
				fontSize: '12px'
			}
		}
	}
};

export default {
  data() {
    return {};
  },
  props: {
		data: {
			type: Array,
			default() {
				return [];
			}
		}
  },
  methods: {
    render() {
			const mixedOptions = Object.assign({}, DEFAULT_OPTIONS, {
				series: [{
					innerSize: '60%',
					data: this.data
				}]
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
