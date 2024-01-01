// order.model.ts

import { Snack } from "./Snack";

export class Order {
  id: number;
  state: string;
  total: number;
  snacks: Snack[];

  constructor(id: number, state: string, total: number, snacks: Snack[]) {
    this.id = id;
    this.state = state;
    this.total = total;
    this.snacks = snacks;
  }

  getSnacks(): Snack[] {
    return this.snacks;
  }
}
