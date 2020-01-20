function calculateValidationNumber(input) {
  if (input < 10) return input;
  const $arr = input
    .toString()
    .split('')
    .map(i => parseInt(i))
    .reduce((acc, cur) => acc + cur);

  return $arr < 10 ? $arr : calculateValidationNumber($arr);
}

const $s1 = calculateValidationNumber(444444);
console.log('output: ', $s1); // output: 6

const $s2 = calculateValidationNumber(1234);
console.log('output: ', $s2); // output: 1

const $s3 = calculateValidationNumber(23478998);
console.log('output: ', $s3); // output: 5
