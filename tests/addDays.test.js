import { AddDays } from '../src/AddDays/AddDays';

describe('addDays', () => {
    test('should add days to date', () => {
      expect(AddDays('1/1/2023', 5)).toEqual('1/6/2023');
    });
  });