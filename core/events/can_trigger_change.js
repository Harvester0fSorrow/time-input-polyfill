export default function can_trigger_change($input) {
	return !/--/.test($input.value)
}
