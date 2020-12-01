var price;
var quantity;
var total;
var el;

price = 5;
quantity = 14;
total = price * quantity;

el = document.getElementById("cost").innerHTML = "total= " + total;
el.textcontext = '$' + total;