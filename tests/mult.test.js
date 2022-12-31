import { Mult } from '../src/Mult/Mult';

describe('mult', () => {
  test('should multiply two numbers', () => {
    expect(Mult(2, 2)).toEqual(4);
  });
});
