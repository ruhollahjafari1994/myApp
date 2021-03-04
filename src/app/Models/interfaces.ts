 import * as interfaces from'../interfaces/item1'; //=> * as interfaces => اضافه کردن پیشوند اینترفیس به آیتم 1 => جلوگیری از تضاد
export class Item implements interfaces.Item{
  public constructor(name:string , price :number ,count : number ){
    this.name=name;
    this.price=price;
    this.count=count;
  }
  public name :string;
  public price : number ;
  public count : number ;
}
