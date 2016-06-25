// Duplicate symbol n times
// @param {String} symbol
// @param {Integer} times
// @return {String}
function ntimes(symbol, times){
	var out = '';
	while(times-- > 0) out += symbol;
	return out;
}
// Create formated text at text rectangel 
// @param {String} string 
// @param {Integer} width (number of symbols)
// @return {String}
function TextLabel(string, width){
	var out = '+' + ntimes('-', width) + '+\n|';

	if(width){
		var 	start = 0,
				lines = [],
				part;

		while(start < string.length){
			part = string.substr(start, width);
			Array.prototype.push.apply(lines, part.split('\n').map(function(s){
				return (s.length < width) ? s + ntimes(' ', width - s.length) : s;
			}));
			start += width;
		}
		out += lines.join('|\n|');
	}
	out += '|\n+' + ntimes('-', width) + '+\n';
	return out;
}

module.exports.TextLabel = TextLabel;