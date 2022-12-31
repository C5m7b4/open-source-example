import { Divide } from '../src/Divide/Divide';

describe('divide', () => {
  test('should divide two numbers', () => {
    expect(Divide(4, 2)).toEqual(2);
  });
});
