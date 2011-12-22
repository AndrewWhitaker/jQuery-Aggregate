module("jQuery.aggregate Tests")

test("Basic Tests", function () {
	expect(1);
		
	ok(jQuery.aggregate, "$.aggregate exists");
});

test("aggregate", function () {
	expect(4);
	
	var fn = function (working, el) {
		return working ? el + working : el;
	};
	
	/* Without seed, with function */
	equal(jQuery.aggregate([1, 2, 3], fn), 6);
	
	/* With seed, without function */
	equal(jQuery.aggregate([1, 2, 3], 10, fn), 16);
	
	var resultFn = function(val) {
		return val + 10;
	};
	
	/* Without seed, result function */
	equal(jQuery.aggregate([1, 2, 3], fn, resultFn), 16);
	
	/* With seed, result function */
	equal(jQuery.aggregate([1, 2, 3], 10, fn, resultFn), 26);

});