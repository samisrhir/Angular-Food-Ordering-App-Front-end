// order.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { SharedService } from '../sharedservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: any = {};

  constructor(
    public orderService: OrderService,
    public sharedService: SharedService,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
  }

  placeOrder() {
    const orderData = {
      // Adjust the order data structure as needed
      total: this.calculateTotal(),
      snacks: this.sharedService.selectedSnacks
    };

    this.http.post('http://localhost:8088/commandes/add', orderData)
      .subscribe(
        (response: any) => {
          console.log('Order placed successfully:', response);
          // Optionally, you can reset the selected snacks array or perform other actions
          this.sharedService.selectedSnacks = [];
        },
        error => {
          console.error('Error placing order:', error);
        }
      );
  }

  calculateTotal(): number {
    // Implement your logic to calculate the total order amount
    // For example, summing the prices of selected snacks
    return this.sharedService.selectedSnacks.reduce((total, snack) => total + snack.price, 0);
  }
}
