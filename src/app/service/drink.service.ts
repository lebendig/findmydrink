import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private apiUrl = 'http://localhost:8080/api/drinks';

  constructor(private http: HttpClient) { }

  searchDrinks(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?name=${name}`);
  }

  updateDrink(id: number, drink: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, drink);
  }

}
