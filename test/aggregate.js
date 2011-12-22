module("jQuery.aggregate Tests");

test("Basic Tests", function () {
	expect(2);
		
	ok(jQuery.aggregate, "jQuery.aggregate exists");
    ok(jQuery.fn.aggregate, "jQuery.fn.aggregate exists");
});

test("jQuery.aggregate", function () {
	expect(4);
	
	var fn = function (working, el) {
		return working ? el + working : el;
	};
	
	/* Without seed */
	equal(jQuery.aggregate([1, 2, 3], fn), 6);
	
	/* With seed */
	equal(jQuery.aggregate([1, 2, 3], 10, fn), 16);
	
	var resultFn = function(val) {
		return val + 10;
	};
	
	/* Without seed, result function */
	equal(jQuery.aggregate([1, 2, 3], fn, resultFn), 16);
	
	/* With seed, result function */
	equal(jQuery.aggregate([1, 2, 3], 10, fn, resultFn), 26);
});

test("jQuery.fn.aggregate", function () {
    expect(4);
    
    var fn = function (working, el) {
        return working ? parseInt($(el).text(), 10) + working : parseInt($(el).text(), 10);
    };
    
    /* Without seed */
    equal($("span.num").aggregate(fn), 6);
    
    /* With seed */
    equal($("span.num").aggregate(10, fn), 16);
    
    resultFn = function (val) {
        return val + 10;
    };
    
    /* Without seed, result function */
    equal($("span.num").aggregate(fn, resultFn), 16);
    
    /* With seed, result function */
    equal($("span.num").aggregate(10, fn, resultFn), 26);
    
});