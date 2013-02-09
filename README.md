# jQuery Aggregate

Provides LINQ-like aggregate functionality

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/AndrewWhitaker/jQuery-Aggregate/master/dist/jQuery-Aggregate.min.js
[max]: https://raw.github.com/AndrewWhitaker/jQuery-Aggregate/master/dist/jQuery-Aggregate.js

In your web page:

```html
<html>
    <head>
        <script src="jquery.js"></script>
        <script src="dist/jQuery-Aggregate.min.js"></script>
        <script>
            jQuery(function($) {
              // $.aggregate and $.sum are now available.
            });
        </script>
    </head>
</html>
```

_(Coming soon)_
## Documentation

###### jQuery.aggregate(array [,seed], callback(workingValue, elementOfArray) [,resultFunction(finalValue)])
-----------------

**array**:  
*Type*: Array  
The array to aggregate.

**seed (default value: null)**  
*Type*: Object  
An initial "seed" value.  

**callback(workingValue, elementOfArray)**  
*Type*: Function()  
The aggregating function called to incorporate the current element of the array into the aggregate value. The function should return the new working aggregate value.

**resultFunction(finalValue) (default value: null)**  
*Type*: Function()  
A function that's executed after the array has been aggregated into a single value. You can use this function to manipulate the final result

**This is the "static" version of the function. You can also call `.aggregate` directly on a jQuery object.**

##### jQuery.sum(array [,callback(elementOfArray)])
----------------------------------------------------

**array**:  
*Type*: Array  
The array to sum.

**callback(elementOfArray)**:  
*Type*: Function()  
An optional function that recieves the element of the array being iterated over and returns a value to incorporate into the sum.

## Examples

Simple use case: 

```JavaScript
var letters = "abcdefghijklmnopqrstuvwxyz"
    , message = $.aggregate([0, 6, 6, 17, 4, 6, 0, 19, 4], function (working, element) {
        return working ? working + letters.charAt(element) : letters.charAt(element);
    });
    
    // message === "aggregate"
```    
**Fiddle:** http://jsfiddle.net/qRpeT/1/

Supplying an initial seed value:

```JavaScript
var letters = "abcdefghijklmnopqrstuvwxyz"
    , message = $.aggregate([0, 6, 6, 17, 4, 6, 0, 19, 4], '',  function (working, element) {
        return working + letters.charAt(element);
    });
    
    // message === "aggregate"
```

**Fiddle:** http://jsfiddle.net/T9JL5/1/

## Release History
_(Nothing yet)_
