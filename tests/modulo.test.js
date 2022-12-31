import { Modulo } from '../src/Modulo/Modulo';

describe('modulo', () => {
  test('should give the correct remainder after dividing two numbers', () => {
    expect(Modulo(9, 7)).toEqual(2);
    expect(Modulo(20, 5)).toEqual(0);
    expect(Modulo(18, 7)).toEqual(4);
    expect(Modulo(43, 6)).toEqual(1);
  });
});
