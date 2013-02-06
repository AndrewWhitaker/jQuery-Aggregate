(function (QUnit, $) {
    'use strict';
    QUnit.module("jQuery.aggregate Tests");

    QUnit.test("Basic Tests", function () {
        QUnit.expect(2);
            
        QUnit.ok(jQuery.aggregate, "jQuery.aggregate exists");
        QUnit.ok(jQuery.fn.aggregate, "jQuery.fn.aggregate exists");
    });

    QUnit.test("jQuery.aggregate", function () {
        var fn, resultFn;

        QUnit.expect(4);
        
        fn = function (working, el) {
            return working ? el + working : el;
        };
        
        /* Without seed */
        QUnit.equal(jQuery.aggregate([1, 2, 3], fn), 6);
        
        /* With seed */
        QUnit.equal(jQuery.aggregate([1, 2, 3], 10, fn), 16);
        
        resultFn = function(val) {
            return val + 10;
        };
        
        /* Without seed, result function */
        QUnit.equal(jQuery.aggregate([1, 2, 3], fn, resultFn), 16);
        
        /* With seed, result function */
        QUnit.equal(jQuery.aggregate([1, 2, 3], 10, fn, resultFn), 26);
    });

    QUnit.test("jQuery.fn.aggregate", function () {
        var fn, resultFn;
        
        QUnit.expect(4);
        
        fn = function (working, el) {
            return working ? parseInt($(el).text(), 10) + working : parseInt($(el).text(), 10);
        };
        
        /* Without seed */
        QUnit.equal($("span.num").aggregate(fn), 6);
        
        /* With seed */
        QUnit.equal($("span.num").aggregate(10, fn), 16);
        
        resultFn = function (val) {
            return val + 10;
        };
        
        /* Without seed, result function */
        QUnit.equal($("span.num").aggregate(fn, resultFn), 16);
        
        /* With seed, result function */
        QUnit.equal($("span.num").aggregate(10, fn, resultFn), 26);
        
    });
}(QUnit, jQuery));