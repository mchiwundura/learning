import Stack from "./ADTs/stack.ts";

// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing. An example of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24.

function findMissingParenthesis(
	expression: string,
	stack: Stack<number>,
): string {
	for (let i = 0; i < expression.length; i++) {
		const char = expression[i];

		if (char === "(") {
			stack.push(i);
		}

		if (char === ")") {
			if (stack.length() === 0) {
				// Found a closing ')' without a matching '('
				return `Missing '(' before position ${i}`;
			}
			stack.pop();
		}
	}

	// If stack still has elements, there are unmatched '('
	if (stack.length() > 0) {
		const pos = stack.pop();
		return `Missing ')' after position ${pos}`;
	}

	return "Parentheses are balanced";
}

const expr = "2.3 + 23 / 12 + (3.14159 * .24";
const stack = new Stack<number>();

console.log(findMissingParenthesis(expr, stack));
