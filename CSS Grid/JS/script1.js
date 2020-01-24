function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
//   Solution 2 (Click to Show/Hide)
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}
//   Solution 3 (Click to Show/Hide)
function countdown(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
//   Solution 4 (Click to Show/Hide)
function countdown(n) {
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
