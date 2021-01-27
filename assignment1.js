
// Q.1-What will the code below output to the console and why ?
console.log(1+"2"+"2");
 122
undefined

console.log(1+ +"2"+"2");
 32
undefined

console.log(1+ -"1"+"2");
 02
undefined

console.log(+"1" + "1" + "2");
 112
undefined

console.log( "A" - "B" + "2");
 NaN2
undefined

console.log( "A" - "B" + 2);
 NaN
undefined

// Q.2-You are given a variable “marks”. Your task is to print:
// - AA if the mark is greater than 90
// - AB if the mark is greater than 80 and less than or equal to 90
// - BB if the mark is greater than 70 and less than or equal to 80
// - BC if the mark is greater than 60 and less than or equal to 70
// - CC if the mark is greater than 50 and less than or equal to 60
// - CD if the mark is greater than 40 and less than or equal to 50
// - DD if the mark is greater than 30 and less than or equal to 40
// - FF if the mark is less than or equal to 30


// answer-

var marks=85;
if (marks > 90) {
    console.log("your grade is aa");
  } else if (marks > 80 && marks <= 90) {
    console.log("your grade is ab");
  } else if (marks > 70 && marks <= 80) {
    console.log("your grade is ab");
  } else if (marks > 60 && marks <= 70) {
    console.log("your grade is ab");
  } else if (marks > 50 && marks <= 60) {
    console.log("your grade is ab");
  } else if (marks > 40 && marks <= 50) {
    console.log("your grade is ab");
  } else if (marks > 30 && marks <= 40) {
    console.log("your grade is ab");
  } else {
    console.log("your grade is ff");
  }







var marks=95;
if (marks > 90) {
    console.log("your grade is aa");
  } else if (marks > 80 && >=90) {
    console.log("your grade is ab");
} else if (marks > 70) {
    console.log("your grade is bb");
} else if (marks > 60) {
    console.log("your grade is bc");
} else if (marks > 50) {
    console.log("your grade is cc");
} else if (marks > 40) {
    console.log("your grade is cd");
  } else {
    console.log("your grade is ff");
  }




