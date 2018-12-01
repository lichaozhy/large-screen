export function randRage(from, to) {
	return Math.round(Math.random() * (to - from) + from);
}