
import {
    Data, 
  } from '.';
  
export class Datum extends Data{
    #value ; 
    constructor(value) {
      super();
      this.#value = value;
    }
    get value(){
      return this.#value;
    }
    set setValue(value){
      this.#value= value ;
    }
  }
  
  