import {
  Data
} from './Data';

describe('Tests of Data',() => {
    test('is a number' , ()=> {
      let data = new Data();
      expect(data.isData(25)).toBeTruthy();
    });
    test('is a string', ()=>{
      let data = new Data();
      expect(data.isData('1114AB')).toBeFalsy();
    });
    test('is  NaN', ()=>{
      let data = new Data();
      expect(data.isData(NaN)).toBeFalsy();

    });
  });
  