(function($) {
    // aggregate(object, [seed], fn
    $.aggregate = function(object, seed, fn) {
        var val;
        
        if (typeof(fn) === 'undefined') {
            fn = seed;
        } else {
            val = seed;
        }
        
        $.each(object, function(index, element) {
            val = fn(val, element);
        });
        
        return val;
    };
})(jQuery);