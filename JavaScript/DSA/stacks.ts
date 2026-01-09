import Stack from "./ADTs/stack.ts";

function findMissingParenthesis(
	expression: string,
	stack: Stack<number>
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


