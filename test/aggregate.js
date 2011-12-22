module("jQuery.aggregate Tests")

test("Basic Tests", function () {
	expect(1);
		
	ok(jQuery.aggregate, "$.aggregate exists");
});

test("aggregate", function () {
	expect(2);
	
	var fn = function (working, el) {
		return working ? el + working : el;
	};
	
	equal(jQuery.aggregate([1, 2, 3], fn), 6);
	equal(jQuery.aggregate("hello", fn), "olleh");
});