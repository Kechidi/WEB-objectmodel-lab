export class Data{
  isData(value){
    return (typeof value ==='number' && !isNaN(value));
  }
}
