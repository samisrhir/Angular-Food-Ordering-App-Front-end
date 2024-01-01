// snack.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Snack } from '../Snack';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8088/snacks/all'; 


  getSnacks(): Observable<Snack[]> {
    return this.http.get<Snack[]>(this.apiUrl);
  }


}