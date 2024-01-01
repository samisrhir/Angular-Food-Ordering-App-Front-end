// order.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { SharedService } from '../sharedservices.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Order';
import { Snack } from '../Snack';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order[] =[]; // Initialize order with default values
  state: any = "Queued";

  reduce(snack: Snack) {
    if (snack.quantity > 1) {
      snack.quantity--;
    }
  }

  add(snack: Snack) {
    snack.quantity++;
  }

  constructor(
    public orderService: OrderService,
    public sharedService: SharedService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (res: Order[]) => { 
        this.order = res;
        console.log(res);
      }
    );
  }
  
  placeOrder() {
    const orderData = {
      total: this.calculateTotal(),
      snacks: this.sharedService.selectedSnacks,
      state: this.state
    };

    this.http.post('http://localhost:8088/commandes/add', orderData)
      .subscribe(
        (response: any) => {
          alert('Order placed successfully:');
          console.log(response);
        },
        error => {
          console.error('Error placing order:', error);
        }
      );
  }

  calculateTotal(): number {
    return this.sharedService.selectedSnacks.reduce((total, snack) => total + snack.price * snack.quantity, 0);
  }

}
