import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  deleteDrink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private drinks: Drink[] = [
    { name: 'Pink Paloma', recipe: 'Tequila 6cl, 1 Limette, Um pouco de sal, Agave Dicksaft (1 Schuss oder 4 cl), Pink Grapefruit Lemondae, Copo com Tajin (enche com gelo normal, na ponto um pouco de crushed ice) Limette no palito com pouquinho Tajin' },
    { name: 'Jalisco Fizz', recipe: 'Tequila 6cl, 1 Limette, Um pouco de sal, Agave Dicksaft (1 Schuss oder 4 cl), Halbe Orange, Pink Grapefruit Lemondae, Copo com Tajin (enche com gelo normal, na ponto um pouco de crushed ice) Orange no palito com pouquinho Tajín' },
    { name: 'Caipirinha', recipe: 'Cahaça 6 cl, 1 Limette (1.5 se nao tiver muito suco), 1 colher e meia de açúcar, Decoração= rodela de limão' },
    { name: 'Mojito', recipe: 'Rum branco 6 cl, 1 Limette (1.5 se nao tiver muito suco), 1 colher e meia de açúcar, 3 ramos de hortelã, água com gás para completar, Decoração= rodela de limão' },
    { name: 'Welligton', recipe: 'Amassa o pepino, Gin 6 cl, 1 zitrone (1.5 se nao tiver muito suco), gome, aquafaba, Decoração= pedaco de pepino no palito e pientinha vermelha' },
    { name: 'Margarita', recipe: 'Tequila 6 cl, Cointreau 1 cl, 1 Limette (1.5 se nao tiver muito suco), Um pouquinho de sal, Agave Dicksaft (1 Schuss oder 4 cl), Colocar Tajín no copo, 3 gelos, pouquinho de crushed ice' },
    { name: 'Mint Margarita', recipe: 'Tequila 6 cl, Cointreau 1 cl, 1 Limette (1.5 se nao tiver muito suco), Um pouquinho de sal, Agave Dicksaft (1 Schuss oder 4 cl), Minze' },
    { name: 'Piña Margarita', recipe: 'Tequila 6 cl, Cointreau 1 cl, 1 Limette (1.5 se nao tiver muito suco), Um pouquinho de sal, Suco de Ananas (2 Schuss oder 6 cl), Colocar Tajin no copo, 3 gelos' },
    { name: 'Whisky Sour', recipe: 'Whisky (Bourbon) 6 cl, Aquafaba 6 cl (2 Schuss), 1 Zitrone (1.5 se nao tiver muito suco), Gommesirup (2 Schuss oder 6 cl), Decoração: Um pedacinho de Zitronenschale contado com a sisora' },
    { name: 'Caramel Whisky Sour', recipe: 'Whisky (Bourbon) 6 cl, Aquafaba 6 cl (2 Schuss), 1 Zitrone (1.5 se nao tiver muito suco), Caramelsirup (2 Schuss oder 6 cl), Decoração: Caramelisierte Zitronescheibe' },
    { name: 'Pisco Sour', recipe: 'Pisco 6 cl, Aquafaba 6 cl (2 Schuss), 1 Limette (1.5 se nao tiver muito suco), Gommesirup (2 Schuss oder 6 cl)' },
    { name: 'Frankfurt Sour', recipe: 'Amaretto 6 cl, Aquafaba 6 cl (2 Schuss), Apfelsaft 6 cl (1 Schuss), 1 Zitrone (1.5 se nao tiver muito suco), Muito pouquinho Gommesirup (metade de um Schuss 1 cl)' },
    { name: 'Mezcal Sour', recipe: 'Mezcal 6 cl, Aquafaba 6 cl (2 Schuss), 1 Limette (1.5 se não tiver muito suco), Agave Dicksaft (2 Schuss oder 6 cl)' },
    { name: 'Mezcal ', recipe: 'igual caipirnnha so que com mezcal' },
    { name: 'Caramel Mezcal Sour', recipe: 'Mezcal 6 cl, Aquafaba 6 cl (2 Schuss), 1 Limette (1.5 se não tiver muito suco), Caramelsirup (2 Schuss oder 6 cl)' },
    { name: 'Siberian Sour', recipe: 'Vodka 6 cl, Aquafaba 6 cl (2 Schuss), 1 Limette (1.5 se não tiver muito suco), Gommesirup (2 Schus oder 6 cl), Peach Bitters (Umas 6 gotinhas)' },
    { name: '43 Sour', recipe: '43 Likör 6 cl, Aquafaba 6 cl (2 Schuss), 1 Zitrone (1.5 se nao tiver muito suco), Muito pouquinho Gommesirup (metade de um Schuss 1 cl)' },
    { name: 'Negroni', recipe: 'Campari 3cl, Gin 3cl, Red Vermouth 3cl, Orangenschale 3 - 4 Stück, Gerührt (großer Eisblock)' },
    { name: 'Purple Negroni', recipe: 'Purple Gin 4cl, Italicus 3cl, Dry Vermouth 3cl, Limettenschale 2 - 3 Stück, Gerührt (großer Eisblock), Deco: Limmetenschale' },
    { name: 'Purple Rain', recipe: 'Purple Gin 6cl, 1 Henry Tonic, meio limao expremido no copinho, Deco: dourado, coisinha verde e um palito' },
    { name: 'Mexican Negroni', recipe: 'Mezcal cl, um que Fica atras do Mezcal 3cl, Red Vermouth 3cl, Orangenschale 2 - 3 Stück, Gerührt (großer Eisblock), Deco: Limmetenschale' },
    { name: 'Don Martinez', recipe: 'Tequila 5cl, Mezcal 1cl, Ancho verde 1cl, Vermouth White 3cl, Gerührt (großer Eisblock), Deco: Limmetenschale' },
    { name: 'The Artist', recipe: 'Purple Gin 6cl, Gurkenschale 2-3 Stück, Orangenschale 2-3 Stück, 0.5 Zitrone (1 se nao tiver muito suco), Gommesirup (2 Schus oder 4 cl), Glas vorkühlen mit Crushed ice, Coloca espuma no copo 1/3 do copo, decora a vontade com chispinhas' },
    { name: 'Ginger Highball', recipe: 'Red Label/Jack Daniels 6cl, 1 Halbe Limette, Gommesirup (2 Schus oder 4 cl), Ingwer fein geschnitten, Ginger Ale (Thomas Henry), Mistura no copo, no precisa shakear' },
    { name: 'Mezcal Highball', recipe: 'Mezcal 4cl, Olympia 1cl, White Vermouth 2cl, 1/2 Orange, Spicy Ginger (Thomas Henry), Mistura no copo, no precisa shakear' },
    { name: 'Primitivo', recipe: 'Wein' },
    { name: 'Sauvignon Touraine', recipe: 'Wein' },
    { name: 'La Croisade', recipe: 'Wein' },
    { name: 'Grauburgunder', recipe: 'Wein' },
    { name: 'Elis & Tom', recipe: 'Cachaca 6cl, Maraschino 1 cl, Gommesirup (2 Schus oder 4cl), Aquafaba 6cl (2 Schuss), Coloca um cereija no fundo do copo e um pouco do sirup das cerejas, coloca crushed ice no copo (metade), coloca drink, depois coloca mais crushed ice e uma cereja com o sirup das cerejas para decorar' }
  ];

  getDrinks(): Observable<Drink[]> {
    return of(this.drinks);
  }

}
