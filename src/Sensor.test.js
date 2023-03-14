
const fs = require('fs').promises;

import{
    TimesSeries,
}from'./TimeSeries' ;

import{
    Temperature,
    Sensor,
    sensorType,
    DOOR,
    FAN_SPEED,
    LIGHT,
    SWITCH,
    HUMIDITY,
    version,
}from'./Sensor' ;
let data;

beforeAll(async () => {
  data = await fs.readFile('./resources/sensors_data.json', {
    encoding: 'utf8',
  });
  data = JSON.parse(data);
});

describe('Sensor model tests', () => {
  describe('Dummy tests', () => {
    test('data is loaded with 3 elements', () => {
      expect(data.length).toBe(3);
    });
    test('version number from the model', () => {
      expect(version()).toBe('1.0.0');
    });
  });
  /* TODO: Écrire ici la suite de tests pour le modèle objet.*/
  //


  describe('Sensor Tests', () => {

    describe('Sensor Init',() => {
      let values = [1, 2, 3];
      let labels = [7, 8, 229, "a"];
            
      let timesSeries = new TimesSeries(values, labels);

      test('TimesSeries values',() => {
        expect(timesSeries.getvalues).toEqual(values);
      });
    });
  });

  
  test('Test if Id sensor is number', () => {
    let test1 = new Sensor(1, 'testIdNumber', sensorType.DOOR , data[1].data);
    expect(test1.getId).toBe(1);
  });
  test('Test setID', () => {
    let t = new Sensor(1, 'testIdNumber', sensorType.DOOR , data[1].data);
    t.setId= 2;
    expect(t.getId).toEqual(2);
  });


  test('Test if Id sensor is string', () => {
    let test2 = new Sensor('2', 'testIdString', sensorType.FAN_SPEED, data[2].data);
    expect(test2.getId).toBe('2');
  });

  test('Test setId', () => {
    let test3 = new Sensor(true, 'testSetId', sensorType.FAN_SPEED, data[2].data);
    test3.setId = '3';
    expect(test3.getId).toBe('3');
  });
  test('Test if Sensor name is string', () => {
    let test4 = new Sensor(true, 'test4', sensorType.TEMPERATURE, data[0].data);
    expect(test4.getName).toEqual('test4');
  });
  test('Sensor name test number', () => {
    let test5 = new Sensor(true, 1, sensorType.FAN_SPEED, data[2].data);
    expect(test5.getName).toEqual('1');
  });
  test('Sensor name test number', () => {
    let test6 = new Sensor(true, 3, sensorType.DOOR, data[1].data);
    expect(test6.getName).toBeTruthy();
  });
  describe('class Temperature', () => {

    test('Temperature inheritance test', () => {
      let temperature = new Temperature(data[0].id, data[0].name ,data[0].data);

      expect(temperature instanceof Sensor).toBe(true);
    });
   test('Test getId', () => {
     let temperature = new Temperature(data[0].id, data[0].name ,data[0].data);

     expect(temperature.getId).toBe(1234);
   });
    test('Test getName', () => {
      let temperature = new Temperature(data[0].id, data[0].name ,data[0].data);

      expect(temperature.getName).toBe('Température Bureau');
    });
    test('Test  getType', () => {
      let temperature = new Temperature(data[0].id, data[0].name ,data[0].data);
      expect(temperature.getType).toBe("TEMPERATURE");
    });

    test('Test  nombreValeurs', () => {
      let temperature = new Temperature(data[0].id, data[0].name ,data[0].data);
      expect(temperature.nombreValeurs()).toBe(9);
    });
    test('Convertir en Celsius  ' , ()=> {
      let temperature = new Temperature(data[0].id, data[0].name, data[0].data);
      expect(temperature.conversionCelsius(86)).toBe(30);
    });

  });

  describe('class DOOR', () => {

    test('test setName ', () => {
      let door = new DOOR(data[1].id, data[1].name, data[1].data);
      door.setName = "porte";
      expect(door.getName).toEqual("porte");
    });
    test('test nombreValeur ', () => {
      let door = new DOOR(data[1].id, data[1].name, data[1].data);
      expect(door.nombreValeurs()).toBe(1);
    });
    test('test nombre de labels ', () => {
      let door = new DOOR(data[1].id, data[1].name, data[1].data);
      expect(door.nombreLabels()).toBe(1);
    });
  });

  describe('class FAN SPEED', () => {
    test('test nombre de labels ', () => {
      let fan_speed = new FAN_SPEED(data[2].id, data[2].name, data[2].data);
      expect(fan_speed.nombreLabels()).toBe(6);
    });
  });

  describe('class HUMIDITY', () => {

    test('test setName ', () => {
      let humidity  = new HUMIDITY(data[1].id, data[1].name, data[1].data);     
      humidity.setName = "humide";
      expect(humidity.getName).toEqual("humide");
    });


   describe('class LIGHT', () => {

      test('test setName ', () => {
        let light  = new LIGHT(data[1].id, data[1].name, data[1].data);     
        light.setName = "lumière ";
        expect(light.getName).toEqual("lumière ");
      });

      describe('class SWITCH', () => {

        test('test setName ', () => {
        let Switch  = new SWITCH(data[1].id, data[1].name, data[1].data);     
        Switch.setName = "switch salle";
        expect(Switch.getName).toEqual("switch salle");
        });

});
});
});
});
