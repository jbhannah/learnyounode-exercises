var sum = process.argv.slice(2).reduce(function (prev, curr) {
  return parseInt(curr) + prev;
}, 0);

console.log(sum);
