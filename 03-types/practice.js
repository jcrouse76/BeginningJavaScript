// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (num) {

	var noRemainder = num % 3;

	return noRemainder === 0;		//equality, not assignment

};


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (tempInCel) {

	var tempF = ((tempInCel * 9) / 5) + 32;

	var roundedTempF = Math.round(tempF * 10) / 10;

	return tempF;
};

var fahrToCels = function (tempInFah) {

	var tempC = ((tempInFah - 32) * 5) / 9;

	var roundedTempC = Math.round(tempC * 10) / 10;

	return tempC;

};


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (rand) {

	console.log("Floor: " + Math.floor(rand) + " and " + "Ceiling: " + Math.ceil(rand));


	var randomNumber = Math.floor(Math.random() * Math.floor(rand));

	return randomNumber;
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (num1, num2) {

	var rand1 = console.log(Math.floor(num1));
	var rand2 = console.log(Math.floor(num2));

	//Math.random() returns float value between 0 and 1. (num2 - num1) + num1
	//means that randInBetween will never be greater than num2
	var randInBetween = Math.random() * (num2 - num1) + num1;

	return Math.round(randInBetween);

};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (whatSuit) {

	//Convert function argument string to uppercase
	var isASuit = whatSuit.toUpperCase();
	console.log(isASuit);

	//Check function argument value
	if (isASuit === "HEARTS" || isASuit === "DIAMONDS" ||
		isASuit === "CLUBS" || isASuit === "SPADES") {
		return true;		//match
	} else {
		return false;		//no-match
	}

	// return isASuit === "HEARTS" || "DIAMONDS" || "CLUBS" || "SPADES";

};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (rank) {

	//if rank is equal to any of the following values, n is true, otherwise false

	var n = rank.toLowerCase().includes("two") || rank.toLowerCase().includes("three")
	|| rank.toLowerCase().includes("four") || rank.toLowerCase().includes("five") 
	|| rank.toLowerCase().includes("six") || rank.toLowerCase().includes("seven")
	|| rank.toLowerCase().includes("eight") || rank.toLowerCase().includes("nine")
	|| rank.toLowerCase().includes("ten") || rank.toLowerCase().includes("jack")
	|| rank.toLowerCase().includes("king") || rank.toLowerCase().includes("queen") 
	|| rank.toLowerCase().includes("ace");


	return n;
 };


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function () {
};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function () {
};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function () {
};


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function () {
};
