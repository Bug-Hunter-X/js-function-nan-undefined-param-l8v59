function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 5)); // NaN
console.log(foo(null, 5)); // 5
console.log(foo(0, 5)); //5