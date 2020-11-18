var price;
var quantity;
var total;
var el;

price = 5;
quantity = 14;
total = price * quantity;

el = document.getElementById("cost");
el.textcontext = '$' + total;