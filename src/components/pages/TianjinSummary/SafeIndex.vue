<template>
<ls-panel
	title="安全指数 - 仪表盘">
	<chart-guage :callback="update" />
</ls-panel>
</template>

<script>

export default {
	methods: {
		update(chart) {
			if (!chart.renderer.forExport) {
				this.timer = setInterval(function () {
					var point = chart.series[0].points[0],
						newVal,
						inc = Math.round((Math.random() - 0.5) * 20);
					newVal = point.y + inc;
					if (newVal < 20 || newVal > 100) {
						newVal = point.y - inc;
					}
					point.update(newVal);
				}, 3000);
			}
		}
	},
	destroyed() {
		clearInterval(this.timer);
	}
};
</script>
