var numbers = [];

for (var i = 1; i <= 100; i++) {
   numbers.push(i);
}

/*** DO NOT EDIT ABOVE THIS LINE ***/

$('button').click(function() {
   /** Start here **/ 
  var total= 0;
  var total2= 1;
  var total3;
   numbers.forEach(function(number){
       total= total + number;
       total2= total2 * number; 
       
});
total3= total / numbers.length;
$("#sum").text(total);
$("#multiply").text(total2);
$("#average").text(total3);
});
