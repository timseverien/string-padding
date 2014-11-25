var pad = function(input, length, padding, side) {
    input = (input || '').toString();
	length = parseInt(length) || 0;
	padding = (padding || '').toString() || ' ';
	side = parseInt(side) || pad.LEFT;
	
	var toggle = false;
	
	while(input.length < length) {
		if(
			side === pad.LEFT ||
			(side === pad.BOTH && !toggle)
		) input = padding + input;
		
		else if(
			side === pad.RIGHT ||
			(side === pad.BOTH && toggle)
		) input += padding;
		
		toggle = !toggle;
	}
	
	return input;
};

pad.LEFT = 0;
pad.RIGHT = 1;
pad.BOTH = 2;

module.exports = pad;
module.exports.prototype = function(length, padding, side) {
	pad(this, length, padding, side);
};