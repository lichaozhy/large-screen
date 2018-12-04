<template>
  <div ref="container" class="h-100 w-100 ls-map"></div>
</template>

<script>
import Highcharts from "highcharts/highmaps";

const DEFAULT_OPTIONS = {
  title: {
    text: null
	},
	credits: {
		enabled: false
	},
	chart: {
		backgroundColor: null
	},
  mapNavigation: {
    enabled: false,
    buttonOptions: {
      verticalAlign: "bottom"
    }
  },
	colorAxis: {
		min: 0,
		stops: [
			[0, '#EFEFFF'],
			[0.5, Highcharts.getOptions().colors[0]],
			[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
    ],
    labels: {
      style: {
        color: '#fff'
      }
    }
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
		}
  },
  methods: {
    render() {
			const mixedOptions = Object.assign({}, DEFAULT_OPTIONS, {
        series: this.series,
        plotOptions: {
          series: {
            events: {
              click: (e) => {
                this.$emit('click', e);
              }
            }
          }
        }
			});

      this.map = new Highcharts.mapChart(this.$refs.container, mixedOptions);
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
