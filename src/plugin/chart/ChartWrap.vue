<template>
  <div ref="container" class="h-100 w-100 ls-map"></div>
</template>

<script>
import Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

const DEFAULT_OPTIONS = {
	credits: {
		enabled: false
	},
};

export default {
  data() {
    return {};
  },
  props: ['options', 'callback'],
  methods: {
    render() {
			const mixedOptions = Object.assign({}, DEFAULT_OPTIONS, this.options);

      this.map = new Highcharts.Chart(this.$refs.container, mixedOptions, this.callback || null);
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
