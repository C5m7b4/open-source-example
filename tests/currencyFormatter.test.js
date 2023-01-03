import { currencyFormatter } from "../src/CurrencyFormatter/CurrencyFormatter";

describe('currencyFormatter', () => {
  test('should format a number with 1 decimal place', () => {
    expect(currencyFormatter(1.1)).toEqual("1.10");
  })
  test('Should format a number with 2 or more numbers after decimal place down to 2 values', () => {
    expect(currencyFormatter(1.678765)).toEqual("1.67");
  })
  test('If value given is not a number value', () => {
    expect(currencyFormatter("bullshit")).toEqual('');
  })
  test('If value given is null or undefined', () => {
    expect(currencyFormatter()).toEqual('');
    expect(currencyFormatter(null)).toEqual('');
    expect(currencyFormatter(undefined)).toEqual('');
  })
})