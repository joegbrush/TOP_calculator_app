let result;

function add(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

function subtract(a, b) {
  let diff = a - b;
  console.log(diff);
  return diff;
}

function multiply(a, b) {
  let product = a * b;
  console.log(product);
  return product;
}

function divide(a, b) {
  let quotient = a / b;
  console.log(quotient);
  return quotient;
}

function operate(calc, num1, num2) {
  if (calc == "+") {
    return (result = add(num1, num2));
  } else if (calc == "-") {
    return (result = subtract(num1, num2));
  } else if (calc == "*") {
    return (result = multiply(num1, num2));
  } else if (calc == "/") {
    return (result = divide(num1, num2));
  } else {
    console.log(`Did not enter a know expression.`);
  }
}
operate("", 6, 3);
