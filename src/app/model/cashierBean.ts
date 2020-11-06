export class ItemBean {
    constructor(
      public itemNo:string,
      public itemName:string,
      public sellPrice:number,
      public cummulativeAmount:number,
      public qty : number,
      public total : number
    ){
  
    }
  }
  
  export class CartItemBean {
    constructor(
  
      public itemNo:string,
      public itemName:string,
      public unitPrice:number,
      public qty:number,
      public total : number
    ){
  
    }
  }