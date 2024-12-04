function foo(a, b) {
  if (a === undefined) {
    a = 0;
  } else if (a === null) {
    a = 0;
  }
  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(0, 5)); //5