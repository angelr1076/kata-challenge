//1. write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

//argument is size
function stringy(size) {
//create an empty string to return the "1", "0" strings
  var num = "";
//loop through the size argument the exact amount of times of the number value 
  for (var i = 0; i < size; i ++) {
//Use the modulus operator. If the number in the index of size running through the loop is divisible by 2, use "1". 
    if (i % 2 === 0) {
      num += "1";
//else give the value "0"
    } else {
      num += "0";
    }
  }
  return num;
}

console.log(stringy(1));
console.log(stringy(2));
console.log(stringy(3));
console.log(stringy(4));
console.log(stringy(10));



//2. Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3] 
function inReverseOrder(num) {
  
 //Create a variable to convert the number entered into a string
 //Split it into an string arry and reverse the array
  var toSplit = num.toString().split('').reverse('');

  //The .map function will loop through the string array and convert each
  //number into an number using the Number function on every item then pushes
  //each number into a new array
  var result = toSplit.map(Number);
 
  return result;
 }
 
 console.log(inReverseOrder(348597));


//3. Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?

// 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …

// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

function fibSeq(num) {
//Rule out any number below one or negative integers so we're not subtracting them in the return sequence.
//Any integer 1 or below returns 1 so the return statement doesn't break by adding negative numbers
  if (num <= 1) return 1;

// return the number entered minus 1 plus the number entered minus 2 to get the sequence to work
  return fibSeq (num -1) + fibSeq (num - 2);
}

console.log(fibSeq(-1));
console.log(fibSeq(0));
console.log(fibSeq(1));
console.log(fibSeq(10));
console.log(fibSeq(20));


//4. Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"


function checkCoupon(dateOfExp) {
  //Pull the date and time in milliseconds from January 1, 1970
  var a = Date.now();
  //Pull the date entered in the argument and convert to milliseconds
  var c = Date.parse(dateOfExp);

  //Compare the date now in milliseconds versus the date entered in milliseconds. If the date entered is less in milliseconds than the current time comparison, the coupon has expired; Otherwise, it has not. 
  if (a > c) {
    return false + ", your coupon has expired";
  } else {
    return true + ", your coupon is still valid";
  }

}

console.log(checkCoupon("June 15, 2014"));
console.log(checkCoupon("September 24, 2018"));
console.log(checkCoupon("October 20, 1988"));


//5. Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: 
//*At least one letter character at the beginning 
//*All characters between the first character and the @ (if any) must be letters, numbers, or underscores 
//*There must be an @ character (after the points listed just now) After the @ character, 
//*There must be at least one word character (letter, number, or underscore) or hyphen 
//*The email must end with at least one set of a dot followed by one or more word characters. 
//*The input must NOT be case-sensitive The function should return true or false.

function emailValidate(email) {
  //Surround the variable with a carrot and $ so that the email address can only follow the rules within. 
  //First character must be a letter
  //After the first dot after the @ symbol, we want only letters and they can only be between 2 and 8 characters, e.g.(.com, .pizza, .io), etc.
  //The last argument is optional in case you have a .io.com since I added the ?
  var regExp = /^([a-z])([a-z\d\._]+)@([a-z\d_]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/i;

  //The if/else statement will test whether this is valid or invalid wiht the built-in text method to search for a match between a regex and string
  if (regExp.test(email)) {
    return "valid";
  } else {
    return "invalid";
  }
}

console.log(emailValidate("angelr1076@gmail.com"));
console.log(emailValidate("123@gmail.com"));
console.log(emailValidate("8angelr1076@gmail.com"));
console.log(emailValidate("m1ckeymouse@yahoo.com"));
console.log(emailValidate("-angelr1076@gmail.com.com"));
