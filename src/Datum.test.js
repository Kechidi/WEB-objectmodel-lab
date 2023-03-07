import {
  Datum,
} from './Datum';

describe('Tests of Datum', () => {

    test('Test getValue ', () => {
      let test1 = new Datum(2);

      expect(test1.value).toBe(2);
    });
    test('Test setValue', () => {
      let test1 = new Datum(2);

      test1.setValue= 1;

      expect(test1.value).toEqual(1);
    });
  });
