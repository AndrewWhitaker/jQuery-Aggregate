(function($) {
    $.aggregate = function(object, seed, fn, resultFn) {
        var val;
		
		if (typeof(seed) === "function") {
			resultFn = fn;
			fn = seed;
		} else {
			val = seed;
		}
        
        $.each(object, function(index, element) {
            val = fn(val, element);
        });
		
		if (typeof(resultFn) === 'function') {
			val = resultFn(val);
		}
        
        return val;
    };
})(jQuery);