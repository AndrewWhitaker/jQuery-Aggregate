(function (QUnit, $) {
    QUnit.module("jQuery.sum tests");

    QUnit.test("Basic tests", function () {
        QUnit.expect(2);
        
        QUnit.ok(jQuery.sum, "jQuery.sum exists");
        QUnit.ok(jQuery.fn.sum, "jQuery.fn.sum exists");
    });

    QUnit.test("jQuery.sum", function () {
        QUnit.expect (2);
        
        /* No transform function */
        QUnit.equal(jQuery.sum([0, 1, 2, 3]), 6);
        
        /* Transform function */
        QUnit.equal(jQuery.sum([
            { name: 'one', val: 1 }, 
            { name: 'two', val: 2 },
            { name: 'three', val: 3 }], function (el) {
                return el.val;
            }), 6);
    });

    QUnit.test("jQuery.fn.sum", function () {
        QUnit.expect(2);
        
        /* Sum using the el parameter */
        QUnit.equal(jQuery("span.num").sum(function (el) {
            return parseInt($(el).text(), 10);
        }), 6);
        
        /* Sum using this: */
        QUnit.equal(jQuery("span.num").sum(function () {
            return parseInt($(this).text(), 10);
        }), 6);

    });
}(QUnit, jQuery));