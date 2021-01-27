Question 1
What is the value of clothes[0] and why?
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

answer
value of clothes[0] is jacket because index starts from 0



Question 2
Write a Javascript program to find the sum of all elements of a given array?

answer
var array = [10, 20, 30, 40, 50];
var sum = array.reduce(function(a, b){
   return a + b;
}, 0);
console.log(sum); 