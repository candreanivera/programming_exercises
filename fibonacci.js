function fibonacci(number) {
  const result = [0, 1];
  for (i = 1; i <= number; i++) {
    value = result[i] + result[i - 1];
    result.push(value);
  }
  return result;
}

console.log(fibonacci(19));
