//Write a function that takes no parameters and logs the text 
//“Bernadette had a boat” to the console. 

function logTextToConsole() {
  console.log("Bernadette had a boat");

}
console.log(logTextToConsole)

//Write a function that takes one parameter (vehicle) and logs the 
//text “Bernadette had a [boat]”, where [boat] should be replaced 
//with the parameter vehicle
function logVehicle(vehicle) {
  console.log("Bernadette had a " + vehicle);
}
logVehicle("BMW");

/* Write a function that takes two parameters (balance, cost), 
calculates the new balance by subtracting cost from balance and 
logs the result to the console in the form of a message like this 
(change [1300] to your calculated difference) – “Your new balance 
is [1300]kr
*/
function calculateBalance(balance, cost) {
  const newBalance = balance - cost;
 

  console.log("Your new balance is " + newBalance + "kr");
  


}
calculateBalance(1500, 200);

/*Write a function that takes one parameter (radius) and returns the 
area of a circle. Use the formula radius * radius * π. In JavaScript, 
Math.PI gets you the value of π.*/

function calculateCircle(radius) {
  const area = Math.PI * radius * radius;

  return area;
}
const radius = 10;
const area = calculateCircle(radius);
console.log("Area of circle with radius" + radius + " is " + area) ;

/*User
Write a function that takes three parameters (x, y, z) and returns 
the sum of the three parameters. Call the method three times. 
The first time, use three numbers as arguments. The second time, 
use two numbers and a text as arguments. The third time, use a 
text and two numbers as arguments. What difference do you 
notice between the results returned?
*/
function sumOfThreeArguments(x, y, z) {
  return x + y + z;
}
console.log(sumOfThreeArguments(10, 20, 30)); // add numbers sum
console.log(sumOfThreeArguments(10, 20, "30")); // change place of 30 on first and add (concatenating) 10+ 20 and combine with 3030
console.log(sumOfThreeArguments("10", 20, 30)); // hmmm not sure, maybe its a string l l dont know how to use typeof here? 