import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8088/commandes/add'; 
 
  orders : any[]=[];

  createorder(order:any){

    this.http.post(this.apiUrl,order)
  }
}