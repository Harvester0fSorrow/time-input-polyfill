
var convert_to_12hr_time = require('../converters/convert_to_12hr_time');
var set_data_attribute = require('../setters/set_data_attribute');

module.exports = function set_time($input, time_string_24hr) {
	var twelveHr = convert_to_12hr_time(time_string_24hr);
	$input.value = twelveHr;
	set_data_attribute($input, time_string_24hr);
}
