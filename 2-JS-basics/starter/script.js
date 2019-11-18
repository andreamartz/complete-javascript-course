/*****************************
* CODING CHALLENGE 2 (Video 18)
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.

APMNote: Consider the possibility of a tie for highest average score.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw 
(the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner 
to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch 
the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/* SOLUTION 1: if/else */
/*
var teamJohnAvg = 89 + 120 + 103 / 3;
var teamMikeAvg = 116 + 94 + 123 / 3;
var roundJohnAvg = Math.round(teamJohnAvg);
var roundMikeAvg = Math.round(teamMikeAvg);

console.log('John\'s team\'s average: ' + teamJohnAvg)
console.log('Mike\'s team\'s average: ' + teamMikeAvg)


if (teamJohnAvg > teamMikeAvg) {
  console.log('John\'s team is the winner with ' + roundJohnAvg + ' points!');
} else if (teamMikeAvg > teamJohnAvg) {
  console.log('Mike\'s team is the winner with ' + roundMikeAvg + ' points!');
} else {
  console.log('The two teams are tied!');
}
*/

/* SOLUTION 2 (with bonus): swith statements */

// var teamJohnAvg = 89 + 120 + 103 / 3;
// var teamMikeAvg = 116 + 94 + 123 / 3;
// var teamMaryAvg = 97 + 134 + 105 / 3;

/*
var teamJohnAvg = 210;
var teamMikeAvg = 209;
var teamMaryAvg = 208;
*/
// var roundJohnAvg = Math.round(teamJohnAvg);
// var roundMikeAvg = Math.round(teamMikeAvg);
// var roundMaryAvg = Math.round(teamMaryAvg);

// console.log('John\'s team\'s average: ' + teamJohnAvg)
// console.log('Mike\'s team\'s average: ' + teamMikeAvg)
// console.log('Mary\'s team\'s average: ' + teamMaryAvg)

// switch (true) {
  // John wins
  // case ((teamJohnAvg > teamMikeAvg) && (teamJohnAvg > teamMaryAvg)):
  //   console.log('John\'s team is the winner with ' + teamJohnAvg + ' points!');
  //   break;
  // Mike wins
  // case ((teamMikeAvg > teamJohnAvg) && (teamMikeAvg > teamMaryAvg)):
  //   console.log('Mike\'s team is the winner with ' + teamMikeAvg + ' points!');
  //   break;
  // Mary wins
  // case ((teamMaryAvg > teamJohnAvg) && (teamMaryAvg > teamMikeAvg)):
  //   console.log('Mary\'s team is the winner with ' + teamMaryAvg + ' points!');
  //   break;
  // John and Mike tied
  // case ((teamJohnAvg === teamMikeAvg && teamJohnAvg > teamMaryAvg)):
  //   console.log('John\'s team and Mike\'s team are tied with ' + teamJohnAvg + ' points!');
  //   break;
  // John and Mary tied
  // case ((teamJohnAvg === teamMaryAvg && teamJohnAvg > teamMikeAvg)):
  //   console.log('John\'s team and Mary\'s team are tied with ' + teamJohnAvg + ' points!');
  //   break;
  // Mike and Mary tied
  // case ((teamMikeAvg === teamMaryAvg && teamMikeAvg > teamJohnAvg)):
  //   console.log('Mike\'s team and Mary\'s team are tied with ' + teamMikeAvg + ' points!');
  //   break;
  // 3-way tie
  // case ((teamMikeAvg === teamMaryAvg && teamMikeAvg === teamJohnAvg)):
  //   console.log('All three teams are tied with ' + teamJohnAvg + ' points!');
  //   break;
// }


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/* Pseudocode:
1. Make a fcn that takes in a single bill amount.
2. The function will calculate one value: the tip
3. The function will return the tip amount
4. The function will be called three times - once for each bill - and the output will be stored in a different 
variable each time (e.g., tip1, tip2, and tip3)
5. The total amount paid will be calculated for each bill (amtPaid1, amtPaid2, and amtPaid3).
6. The tip array will be created using 'push' method.
7. The amt paid array will be created using 'push' method.
*/

// var bills = [124, 48, 268];

// var tipCalc = function(bill) {
//   switch(true) {
//     case bill < 50:
//       tip = .2 * bill;
//       break;
//     case bill <= 200:
//       tip = .15 * bill;
//       break;
//     case bill > 200:
//       tip = .1 * bill;
//   }
//   return tip;
// }

// var tips = [tipCalc(bills[0]), 
//             tipCalc(bills[1]),
//             tipCalc(bills[2])];

// console.log('The tips array is: ' + tips);

// var amtsPaid = [bills[0] + tips[0], 
//                 bills[1] + tips[1], 
//                 bills[2] + tips[2]];
                
// console.log('The amounts Paid array is: ' + amtsPaid);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same 
functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/* Pseudocode:
1. Create an object for each: Mark and John (full name, mass, and height)
2. Add a method to each object that calculates the BMI
3. Call the BMI calculation method, and save the BMI to the object.
4. Determine who has the larger BMI, accounting for the fact that they may have the SAME BMI.
5. Log to the console who has the highest BMI, together with the full name and the respective BMI.

*/

// mass in kg and height in meters
// var mark = {firstName: 'Mark', 
//             mass: 78, 
//             height: 1.69, 
//             calculateBMI: function() {
//               this.bmi = this.mass / (this.height * this.height);
//               return this.bmi;
//             }
// }

// var john = {firstName: 'John', 
//             mass: 92, 
//             height: 1.95,
//             calculateBMI: function () {
//               this.bmi = this.mass / (this.height * this.height);
//               return this.bmi;
//             }
// }

// console.log(mark);
// console.log(john);

// var compareBMI = function () {
//   switch (true) {
//     case (mark.calculateBMI() > john.calculateBMI()):
//       console.log(mark.firstName + '\'s BMI is ' + mark.bmi + ', which is higher than ' + john.firstName + '\'s.');
//       break;
//     case (john.bmi > mark.bmi):
//       console.log(john.firstName + '\'s BMI is ' + john.bmi + ', which is higher than ' + mark.firstName + '\'s.');
//       break;
//     case (john.bmi === mark.bmi):
//       console.log(john.firstName + '\'s BMI is ' + john.bmi + ', which the same as ' + mark.firstName + '\'s.');
//       break;
//   }
// }

// compareBMI();
// console.log(mark);
// console.log(john);

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts 
(bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were 
$77, $375, $110, and $45. Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is 
between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var john = {
//   fullName: 'John Smith',
//   billAmounts: [124, 48, 268, 180, 42], 
//   tipAmounts: [], 
//   totalPaidAmounts: [],
//   calcTip: function() {
//     for (var i = 0; i < this.billAmounts.length; i++) {
//       // Determine tip percentage based on tipping rules
//       var tipPercentage;
//       var bill = this.billAmounts[i];

//       switch(true) {
//         case (bill < 50):
//           tipPercentage = .20;
//           break;
//         case (bill >= 50 && bill <= 200):
//           tipPercentage = .15;
//           break;
//         case (bill > 200):
//           tipPercentage = .10;
//           break;
//       }
//       // Add tip amounts and total paid amounts to their corresponding arrays
//       this.tipAmounts.push(this.billAmounts[i] * tipPercentage);
//       this.totalPaidAmounts.push(this.billAmounts[i] + this.tipAmounts[i]);                       
//     }
//   }
// };

// var mark = {
//   fullName: 'Mark Miller',
//   billAmounts: [77, 375, 110, 45],
//   tipAmounts: [],
//   totalPaidAmounts: [],
//   calcTip: function () {
//     for (var i = 0; i < this.billAmounts.length; i++) {
//       // Determine tip percentage based on tipping rules
//       var tipPercentage;
//       var bill = this.billAmounts[i];

//       switch (true) {
//         case (bill < 100):
//           tipPercentage = .20;
//           break;
//         case (bill >= 100 && bill <= 300):
//           tipPercentage = .10;
//           break;
//         case (bill > 300):
//           tipPercentage = .25;
//           break;
//       }
//       // Add tip amounts and total paid amounts to their corresponding arrays
//       this.tipAmounts.push(bill * tipPercentage);
//       this.totalPaidAmounts.push(bill + this.tipAmounts[i]);
//     }
//   }
// };

// function calcAvgTip(tips) {
//   var tipsSum = 0;
//   for (var i = 0; i < tips.length; i++) {
//     tipsSum += tips[i];
//   }
//   return tipsSum / tips.length;
// }

// john.calcTip();
// mark.calcTip();

// john.avgTip = calcAvgTip(john.tipAmounts);
// mark.avgTip = calcAvgTip(mark.tipAmounts);

// console.log(john, mark);

// function highTip() {
//   if (john.avgTip > mark.avgTip) {
//     console.log(john.fullName + '\'s family paid higher tip amounts on average ($' + john.avgTip + ') than ' + mark.fullName + '\'s family.');
//   } else if (mark.avgTip > john.avgTip) {
//     console.log(mark.fullName + '\'s family paid higher tip amounts on average ($' + mark.avgTip + ') than ' + john.fullName + '\'s family.');
//   } else {
//     console.log(mark.fullName + '\'s family and ' + john.fullName + '\'s family paid the same amount on average in tips ($' + markAvgTip + ').');
//   }
// }

// highTip();
