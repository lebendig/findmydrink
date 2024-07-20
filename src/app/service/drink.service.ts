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

  searchDrinks(name: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.apiUrl}?name=${name}`);
  }

  createOrUpdateDrink(drink: Drink): Observable<Drink> {
    if (drink.id) {
      return this.http.put<Drink>(`${this.apiUrl}/${drink.id}`, drink);
    } else {
      return this.http.post<Drink>(this.apiUrl, drink);
    }
  }

}
