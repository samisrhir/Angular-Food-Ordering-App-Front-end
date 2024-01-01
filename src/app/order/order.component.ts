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
  i!: number;
  removeSnack(index: number) {
    this.sharedService.selectedSnacks.splice(index, 1);
  }
  
  // Initialize order with an empty array
  order: Order[] = [];

  // Default order state
  state: any = "Queued";

  // Variable to store table number
  tableNumber: any;

  // Method to reduce snack quantity
  reduce(snack: Snack) {
    if (snack.quantity > 1) {
      snack.quantity--;
    }
  }

  // Method to increase snack quantity
  add(snack: Snack) {
    snack.quantity++;
  }

  // Constructor with dependency injection
  constructor(
    public orderService: OrderService,
    public sharedService: SharedService,
    private http: HttpClient
  ) {}

  // Lifecycle hook: ngOnInit
  ngOnInit(): void {
    // Fetch orders on component initialization
    this.orderService.getOrders().subscribe(
      (res: Order[]) => {
        this.order = res;
        console.log('Fetched orders:', res);
      }
    );
  }

  // Method to place an order
  placeOrder() {
    // Validate table number
    if (!this.tableNumber || this.tableNumber.trim() === '') {
      alert('Please enter the table number before submitting the order.');
      return;
    }

    // Prepare order data
    const orderData = {
      total: this.calculateTotal(),
      snacks: this.sharedService.selectedSnacks,
      state: this.state,
      tablenum: this.tableNumber
    };

    // Post the order data to the server
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

  // Method to calculate the total price of selected snacks
  calculateTotal(): number {
    return this.sharedService.selectedSnacks.reduce((total, snack) => total + snack.price * snack.quantity, 0);
  }

}
