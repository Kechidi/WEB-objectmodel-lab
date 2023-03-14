
export const version = () => '1.0.0';
export const sensorType = {
  TEMPERATURE: 'TEMPERATURE',
  HUMIDITY: 'HUMIDITY',
  LIGHT: 'LIGHT',
  SWITCH: 'SWITCH',
  DOOR: 'DOOR',
  FAN_SPEED: 'FAN_SPEED'
};

import{
    TimesSeries,
}from'./TimeSeries' ;
import{
    Datum,
}from'./Datum' ;

export class Sensor {
  #id;
  #name;
  #type;
  #data;
  constructor(id, name, type, data) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
    

    if(data.labels === undefined)
    {
      this.#data = new Datum(data.value);

    }
    else
    {
      this.#data = new TimesSeries(data.values, data.labels);

    }
  }

  get getId() {
    return this.#id;
  }
  set setId(val) {
    this.#id = val;
  }

  set setName(val) {
    this.#name = val;
  }
  get getName() {
    if (typeof this.#name != 'string') {
      this.#name = this.#name.toString();
    }
    return this.#name;
  }

  get getType() {
    return this.#type;
  }
  
//   set setType(type){
//     this.#type;
//   }
  nombreValeurs(){
    if ( !this.#data.getvalues)
    {return   1;
    }
    else {return this.#data.getvalues.length ;
    }
  }

  nombreLabels(){
    if ( !this.#data.getlabels)
    {return   1;
    }
    else {return this.#data.getlabels.length ;
    }
  }




}
//class temperature
export class Temperature extends Sensor {
  constructor(id, name,data) {
    super(id, name, sensorType.TEMPERATURE,data);
  }

  conversionCelsius(value){
    return (value-32)/1.8;
  }
}

//class DOOR

export class DOOR extends Sensor{
  constructor(id, name, data){
    super(id,name,sensorType.DOOR,data);
  }
}
//class FAN_SPEEF
export class FAN_SPEED extends Sensor{
  constructor(id, name, data){
    super(id,name,sensorType.FAN_SPEED,data);
  }
}
//class HUMIDITY
export class HUMIDITY extends Sensor{
  constructor(id, name, data){
    super(id,name,sensorType.HUMIDITY,data);
  }
}
// class LIGHT
export class LIGHT extends Sensor{
  constructor(id, name, data){
    super(id,name,sensorType.LIGHT,data);
  }
}
//class SWITCH 
export class SWITCH extends Sensor{
  constructor(id, name, data){
    super(id,name,sensorType.SWITCH,data);
  }
}









