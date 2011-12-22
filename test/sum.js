module("jQuery.sum tests");

test("Basic tests", function () {
    expect(2);
    
    ok(jQuery.sum, "jQuery.sum exists");
    ok(jQuery.fn.sum, "jQuery.fn.sum exists");
});

test("jQuery.sum", function () {
    expect (2);
    
    /* No transform function */
    equal(jQuery.sum([0, 1, 2, 3]), 6);
    
    /* Transform function */
    equal(jQuery.sum([
        { name: 'one', val: 1 }, 
        { name: 'two', val: 2 },
        { name: 'three', val: 3 }], function (el) {
            return el.val;
        }), 6);
});

test("jQuery.fn.sum", function () {
    expect(2);
    
    /* Sum using the el parameter */
    equal(jQuery("span.num").sum(function (el) {
        return parseInt($(el).text(), 10);
    }), 6);
    
    /* Sum using this: */
    equal(jQuery("span.num").sum(function () {
        return parseInt($(this).text(), 10);
    }), 6);

});