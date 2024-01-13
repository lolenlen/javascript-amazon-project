import {formatCurrency} from "../scripts/utils/money.js";


//test cases = test ssituations
//test suites = group of test cases
//2 types
//1. basic test cases (like decimal)
//2. edge cases - testing the limits of the data (like zero and round off)

console.log('test suite: formatCurrency')

console.log('converts cents to dollars')
if (formatCurrency(2095) === '20.95') {
  console.log('decimal passed')
} else {console.log('decimal failed');
};

console.log('works with zero')
if (formatCurrency(0) === '0.00') {
  console.log('zero passed')
} else {console.log('zero failed');
};

console.log('rounding up to nearest hundredth')
if (formatCurrency(2000.5) === '20.01') {
  console.log('rounding up passed')
} else {console.log('rounding up failed');
};

console.log('rounding down to nearest hundredth')
if (formatCurrency(2000.4) === '20.00') {
  console.log('rounding down passed')
} else {console.log('rounding down failed');
};
