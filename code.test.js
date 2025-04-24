const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(factorial(100) === 9.33262154439441e+157);
assert(factorial(0) === 1);
assert(e(10) === 2.7182818011463845);
assert(e(100) === 2.7182818284590455);
assert(e(0) === 1);
assert(2 + 1.0 / factorial(2) === e(2));
