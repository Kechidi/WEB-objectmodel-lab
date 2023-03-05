const fs = require('fs').promises;

import {
  Data,
} from '.';


let data;
beforeAll(async () => {
  data = await fs.readFile('./resources/sensors_data.json', {
    encoding: 'utf8',
  });
  data = JSON.parse(data);
});

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
  