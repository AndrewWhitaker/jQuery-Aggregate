# jQuery Aggregate

Provides LINQ-like aggregate functionality to jQuery.

While jQuery has many useful array utility functions (`$.map` and `$.grep` for example), there's no built-in functionality that aggregates values. This is a small plugin built on top of jQuery that provides that functionality.

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

### Aggregate

#### Simple use case: 

```JavaScript
var letters = "abcdefghijklmnopqrstuvwxyz"
    , message = $.aggregate([0, 6, 6, 17, 4, 6, 0, 19, 4], function (working, element) {
        return working ? working + letters.charAt(element) : letters.charAt(element);
    });
    
    // message === "aggregate"
```    
**Fiddle:** http://jsfiddle.net/qRpeT/1/

#### Supplying an initial seed value:

```JavaScript
var letters = "abcdefghijklmnopqrstuvwxyz"
    , message = $.aggregate([0, 6, 6, 17, 4, 6, 0, 19, 4], '',  function (working, element) {
        return working + letters.charAt(element);
    });
    
    // message === "aggregate"
```

**Fiddle:** http://jsfiddle.net/T9JL5/1/

#### Using a final "transformation function:"

```JavaScript
var letters = "abcdefghijklmnopqrstuvwxyz"
    , message = $.aggregate([0, 6, 6, 17, 4, 6, 0, 19, 4], '',  function (working, element) {
        return working + letters.charAt(element);
    }, function (value) {
        return value.toUpperCase();
    });
    
    // message === "AGGREGATE"
```

**Fiddle:** http://jsfiddle.net/9UakH/1/

#### Using `$.fn.aggregate` on a jQuery object:

```HTML
<form id="groceries">
    <table>
        <thead>
            <tr><td>Item</td><td>Price</td><td>Quantity</td></tr>
        </thead>
        <tbody>
            <tr>
                <td><label for="bread">Bread</label></td>
                <td><span class="price">2.50</span></td>
                <td><input id="bread" type="text" /></td>
            </tr>
            <tr>
                <td><label for="bologna">Bologna</label></td>
                <td><span class="price">4.00</span></td>
                <td><input id="bologna" type="text" /></td>
            </tr>            
            <tr>
                <td><label for="cheese">Cheese</label></td>
                <td><span class="price">3.50</span></td>
                <td><input id="cheese" type="text" /></td>
            </tr>  
            <tr>
                <td><label for="chips">Chips</label></td>
                <td><span class="price">3.00</span></td>
                <td><input id="chips" type="text" /></td>
            </tr>             
        </tbody>
    </table>
    <p>Total: <span id="total"></span></p>
</form>
```

```JavaScript
$(document).ready(function () {
    $("td input:text").on("change", function () {
        var total = $("td input:text").sum(function () {
            var quantity = this.value
                , cost = parseFloat($(this).closest("tr").find(".price").text(), 10) || 0;
            
            return quantity * cost;
        });
        
        $("#total").text(total);
    });
});
```

**Fiddle:** http://jsfiddle.net/WGYaw/1/

### Sum

#### Simple use case:

```JavaScript
var total = $.sum([0, 6, 6, 17, 4, 6, 0, 19, 4]);

$("#total").text(total);

// total === 62
```
**Fiddle:** http://jsfiddle.net/sWrnP/1/

#### Using a transformation function:

```JavaScript
var groceries = [
    { name: 'bread', price: 2.50 },
    { name: 'bologna', price: 4.00 },
    { name: 'cheddar cheese', price: 3.50 },
    { name: 'potato chips', price: 3.00 }
], total = $.sum(groceries, function () {
    return this.price;
});

// total === 13
```

**Fiddle:** http://jsfiddle.net/hfzc2/2/

## Release History
_(Nothing yet)_
