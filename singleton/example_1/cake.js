"use strict";
/**
 * This is the example of how Singleton Pattern may be used in combination with Encapsulation
 * - since private variables are hidden in closure we have no ability to change || even read them
 * - the only thing permitted is to check "cake type"
 */

const cake = (function () {
	const secretRecipe = {
		flour: 500 + "g",
		cacaoPowder: 150 + "g",
		eggs: 3,
		butter: 200 + "g"
	};

	const isChocoladCake = Object.keys(secretRecipe).includes("cacaoPowder");

	const getCakeType = () => isChocoladCake ? "This is chocolate cake" : "Honestly, we do not know what cake is it";

	return {
		getCakeType,
		// secretRecipe: (() => "Nothing here )")()
	};
}());

console.log("the-------------------> Strange cake: ", cake.getCakeType());
console.log("the-------------------> Recipe I wanna steal: ", cake.secretRecipe);