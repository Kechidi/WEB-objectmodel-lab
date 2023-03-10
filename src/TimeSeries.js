import {
    Data, 
  } from './Data';
export class TimesSeries extends Data{
    #values = [];
    #labels = [];
    constructor(values , labels) {
      super();
      this.#values = values;
      this.#labels = labels;
    }
   
    get getvalues(){
      return  this.#values;
    }
    get getlabels(){
      return this.#labels;
    }
    set setValues(values){
      this.#values = values;
    }
    set setLabels(labels){
      this.#labels = labels;
    }

    longuestLabel(labels){
      let splitLbl=labels.toString().split(",");
      let array = [];
      for (let i =0; i<splitLbl.length; i++){
        array.push(splitLbl[i].length);
      }
      console.log(array);
    }
  }
  
  