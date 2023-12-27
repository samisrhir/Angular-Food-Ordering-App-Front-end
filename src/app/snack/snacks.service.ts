// snack.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private apiUrl = 'http://localhost:8088/snacks/all'; 

  constructor(private http: HttpClient) { }

  getSnacks(){
    return this.http.get(this.apiUrl);
  }

  
  }

