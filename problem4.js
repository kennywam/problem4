const variables = {};

const parseExpression = (expression) => {
  expression = expression.replace(/\s/g, "");

  const evaluate = (exp, startIndex) => {
    let i = startIndex;
    let result = false;
    while (i < exp.length) {
      switch (exp[i]) {
        case "(":
          result = evaluate(exp, i + 1);
          i = result.endIndex + 1;
          break;
        case ")":
          return {
            result: result,
            endIndex: i,
          };
        case "T":
          result = true;
          i++;
          break;
        case "F":
          result = false;
          i++;
          break;
        case "¬":
          const nextEval = evaluate(exp, i + 1);
          result = !nextEval.result;
          i = nextEval.endIndex + 1;
          break;
        case "∧":
          nextEval = evaluate(exp, i + 1);
          result = result && nextEval.result;
          i = nextEval.endIndex + 1;
          break;
        case "∨":
          nextEval = evaluate(exp, i + 1);
          result = result || nextEval.result;
          i = nextEval.endIndex + 1;
          break;
        default:
          if (variables.hasOwnProperty(exp[i])) {
            result = variables[exp[i]];
            i++;
          } else {
            throw new Error(`Unknown variable: ${exp[i]}`);
          }
      }
    }
    return {
      result: result,
      endIndex: exp.length,
    };
  };

  return evaluate(expression, 0).result;
};

const evaluate = (input) => {
  const tokens = input.split(" ");
  if (tokens[0] === "let") {
    if (tokens.length !== 4 || tokens[2] !== "=") {
      throw new Error("Invalid assignment");
    }
    variables[tokens[1]] = tokens[3] === "T";
    return `${tokens[1]}: ${tokens[3]}`;
  } else {
    return parseExpression(input) ? "T" : "F";
  }
};
