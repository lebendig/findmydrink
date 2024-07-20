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

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.apiUrl);
  }

  getDrinkById(id: number): Observable<Drink> {
    return this.http.get<Drink>(`${this.apiUrl}/${id}`);
  }

  searchDrinks(name: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiUrl}/search?name=${name}`);
  }

  createDrink(drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(this.apiUrl, drink);
  }

  updateDrink(id: number, drink: Drink): Observable<Drink> {
    return this.http.put<Drink>(`${this.apiUrl}/${id}`, drink);
  }

  deleteDrink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
