// (example) Write a function that accepts two number arguments and adds them
// together.
var add = function (num1, num2) {

	var total = num1 + num2;

	return total;
};


// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003
var totalCost = function (bCost, bCount) {

	var pTaxBCost = bCost * bCount;
	var pTaxBCostRounded = Math.round(pTaxBCost*100)/100;

	return pTaxBCostRounded;
};


// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
var cardString = function (rank, suit) {

	return rank + " of " + suit;
};


// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>
var openTag = function (tagName) {

	var openBracket = "<";
	var closeBracket = ">";

	return openBracket + tagName + closeBracket;

};


// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
var closeTag = function (closingTag) {

	var openBracket = "</";
	var closeBracket = ">";

	return openBracket + closingTag + closeBracket;
};


// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
var toTagString = function (tagName, content) {

	return openTag(tagName) + content + closeTag(tagName);
};


