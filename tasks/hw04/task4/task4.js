/*
a) Prompt the user for 3 numbers.
	  It's given that no two numbers are equal.
	  Show at the console the numbers from the smallest to the biggest,
	  like 6 < 8 < 122.

	  or

   b) CHALLENGE
	  Some of the numbers may be equal. Show, if needed the equality, like:
	  6 = 6 < 122 */

let nums = [+prompt("Enter first number"), +prompt("Enter second number"), +prompt("Enter third number")]

nums = nums.sort()

console.log(`${nums[0]} < ${nums[1]} < ${nums[2]}`)
