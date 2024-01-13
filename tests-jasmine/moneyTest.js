import {formatCurrency} from "../scripts/utils/money.js";


//test cases = test ssituations
//test suites = group of test cases
//2 types
//1. basic test cases (like decimal)
//2. edge cases - testing the limits of the data (like zero and round off)
///spec = test


//test suite
describe('test suite: formatCurrency', () => {
  it('converts cents to dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to nearest hundredth', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds down to nearest hundredth', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});