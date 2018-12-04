<template>
  <div ref="container" class="h-100 w-100 ls-map"></div>
</template>

<script>
import Highcharts from "highcharts";

const options = {
  chart: {
    type: "gauge",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: null
  },
  credits: {
    enabled: false
  },
  title: {
    text: null
  },
  pane: {
    startAngle: -90,
    endAngle: 90,
		center: ['50%', '80%'],
    background: null
  },
  plotOptions: {
    gauge: {
      dial: {
        backgroundColor: '#fff',
        baseLength: '100%'
      },
      pivot: {
        backgroundColor: "#fff"
      }
    }
  },
	// the value axis
  yAxis: {
    min: 0,
    max: 100,
    minorTickInterval: "auto",
    minorTickWidth: 1,
    minorTickLength: 8,
    minorTickPosition: "inside",
    minorTickColor: "#fff",
    tickPixelInterval: 40,
    tickWidth: 2,
    tickPosition: "inside",
    tickLength: 10,
    tickColor: "#fff",
    offset: 35,
    labels: {
      step: 2,
      rotation: "auto"
    },
    title: {
			text: null,
		},
		labels: {
			style: {
        color: '#fff',
        fontSize: '16px'
			}
		},
    plotBands: [
      {
        from: 0,
        to: 25,
        color: "rgb(0,54,109)" // green
      },
      {
        from: 25,
        to: 50,
        color: "rgb(35,92,147)" // yellow
      },
      {
        from: 50,
        to: 75,
        color: "rgb(86,143,198)" // red
      },
      {
        from: 75,
        to: 100,
        color: "rgb(124,181,236)" // red
      }
    ]
  },
  series: [
    {
      name: "当前安全指数： ",
      data: [90],
      tooltip: {
        valueSuffix: " 分"
			},
			dataLabels: {
				borderWidth: 0,
				style: {
          fontSize: '42px',
          color: '#369'
				}
			}
    }
  ]
};

export default {
  data() {
    return {};
  },
  props: ['callback'],
  methods: {
    render() {
			const mixedOptions = Object.assign({}, options);

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
