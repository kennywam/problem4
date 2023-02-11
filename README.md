# problem4

Boolean Logic Interpreter
A Boolean logic interpreter written in JavaScript that can evaluate simple expressions. The interpreter supports the following operators:

∧ (AND)
∨ (OR)
¬ (NOT)
Syntax
The syntax for the Boolean logic interpreter is as follows:

Variables
Variables are assigned using the let keyword. For example:

javascript
Copy code
let X = F
Expressions
Expressions are evaluated using the AND, OR and NOT operators. For example:

r
Copy code
T ∧ F
Parentheses
Parentheses can be used to change the order of evaluation of the operators. For example:

r
Copy code
(T ∧ F) ∨ T
Operator Precedence
The operator precedence rules are as follows:

NOT (¬) has the highest precedence and is evaluated first.
AND (∧) has the second highest precedence and is evaluated second.
OR (∨) has the lowest precedence and is evaluated last.
Parentheses can be used to change the order of evaluation of the operators.

Examples
r
Copy code
λ> T ∨ F
T

λ> T ∧ F
F

λ> (T ∧ F) = F
T

λ> let X = F
X: F

λ> let Y = ¬X
Y: T

λ> ¬X ∧ Y
T
Usage
java
Copy code
node boolean-logic-interpreter.js <expression>
Contributing
If you find a bug or have an idea for a new feature, please open an issue or create a pull request.
