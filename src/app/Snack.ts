export class Snack {
    id: number;
    category: string;
    description: string;
    price: number;
    quantity: number;
    picture:string;
  
    constructor(idd: number, category: string, desc: string, price: number, quant: number,pic:string) {
      this.id = idd;
      this.category = category;
      this.description = desc;
      this.quantity = quant;
      this.price = price;
      this.picture=pic;
    }
  }
  