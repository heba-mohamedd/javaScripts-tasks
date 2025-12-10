//Accepted but not best solution (used 4ms of runtime)
var findKthPositive = function (arr, k) {
  let set = new Set(arr);
  let numbers = [];
  arr.sort((a, b) => a - b);
  for (let i = 1; i <= 2000; i++) {
    if (!set.has(i)) {
      numbers.push(i);
    }
    if (numbers.length === k) break;
  }

  return numbers[k - 1];
};
console.log(findKthPositive([3, 4, 7, 8, 9, 66, 100], 750));
