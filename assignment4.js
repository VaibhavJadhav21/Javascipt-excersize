// Question 1
// By how many ways we can access elements in the DOM and write about them in brief?

// answer
// In Understanding the DOM Tree and Nodes, we went over how the DOM is structured as a tree of objects called nodes, and that nodes can be text, comments, or elements. Usually when we access content in the DOM, it will be through an HTML element node.

// In order to be proficient at accessing elements in the DOM, it is necessary to have a working knowledge of CSS selectors, syntax and terminology as well as an understanding of HTML elements. In this tutorial, we will go over several ways to access elements in the DOM: by ID, class, tag, and query selectors.


// Gets	    Selector Syntax	    Method
// ID             	#demo	        getElementById()
// Class	        .demo	        getElementsByClassName()
// Tag	            demo	        getElementsByTagName()
// Selector(single)	        	querySelector()
// Selector (all)		            querySelectorAll()


// Question 2
// Write a javascript program that will take 2 numbers from the HTML page and display them on the
// HTML page after the addition of those 2 numbers.

// // store input numbers
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

// //add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);