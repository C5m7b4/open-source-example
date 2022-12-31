import { Sub } from '../src/Subtract/Sub';

describe('sub', () => {
  test('should subtract two numbers', () => {
    expect(Sub(5, 4)).toEqual(1);
  });
});
