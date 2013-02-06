/*jslint unparam: true */
/*global jQuery */
(function ($) {
    'use strict';
    $.aggregate = function (object, seed, fn, resultFn) {
        var val;

        if (typeof (seed) === 'function') {
            resultFn = fn;
            fn = seed;
        } else {
            val = seed;
        }

        $.each(object, function (index, element) {
            val = fn.call(element, val, element);
        });

        if (typeof (resultFn) === 'function') {
            val = resultFn(val);
        }

        return val;
    };

    $.sum = function (object, fn) {
        if (fn === undefined) {
            fn = function (el) { return el; };
        }

        return $.aggregate(object, function (val, element) {
            return val ? val + fn.call(this, element) : fn.call(this, element);
        });
    };

    $.fn.aggregate = function (seed, fn, resultFn) {
        return $.aggregate(this, seed, fn, resultFn);
    };

    $.fn.sum = function (fn) {
        return $.sum(this, fn);
    };
}(jQuery));