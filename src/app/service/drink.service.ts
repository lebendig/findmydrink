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
    { name: 'Tangerine Rush', recipe: '40ml Mezcal, 20ml Italicus, 1 Tangerine, 1 ½ Schuss Agave , Ein bisschen Salz, 1Limette, Tajin, Stück Mandarine als Deko' },
    { name: 'Primitivo', recipe: 'Wein' },
    { name: 'Sauvignon Touraine', recipe: 'Wein' },
    { name: 'La Croisade', recipe: 'Wein' },
    { name: 'Grauburgunder', recipe: 'Wein' },
    { name: 'Elis & Tom', recipe: 'Cachaca 6cl, Maraschino 1 cl, Gommesirup (2 Schus oder 4cl), Aquafaba 6cl (2 Schuss), Coloca um cereija no fundo do copo e um pouco do sirup das cerejas, coloca crushed ice no copo (metade), coloca drink, depois coloca mais crushed ice e uma cereja com o sirup das cerejas para decorar' },
    { name: 'Flor de Oaxaca', recipe: 'Hibiskus, Orange, Limette, Mezcal, Tajin' },
    { name: 'Mescalinha', recipe: 'Caipi mit Mezcal, Limette, Orange, Tajin' },
    { name: 'Mescalita', recipe: '(Margarita mit Mezcal, Limette)' },
    { name: 'Tasty fruity iced tea', recipe: 'Limette, schwarzer Tee?)' },
    { name: 'Cuba libre', recipe: '½ Limette, 4cl Rum, 1 Cola, ' },
    { name: 'Moscow Mule', recipe: '6cl Vodka, ½ Limette, Ingwersirup, Ginger beer, Ingwer' },
    { name: 'Manhattan', recipe: 'Gekühltes Glas, 6cl Rye Whiskey, 3cl toter Vermouth, Orange bitter Tropfen, Chocolate Tropfen' },
    { name: 'Polaris', recipe: '4cl Martini,1/2 Zitrone, 4cl Holunder Sirup, Minzblätter beim shaken, Weinglas, 4 Eiswürfel, Halb Tonic - Halb Sekt' },
    { name: 'Aperol Spritz', recipe: '5cl Aperol, Eis, Prosecco bis zur Mitte, Sprudelwasser, Orange Deko' },
    { name: 'Martini', recipe: '15cl grüner Vermouth, 45cl Gin, Oliven' },
    { name: 'Pink kos. Spritz', recipe: 'Spritz 60cl Rose Vermouth, Tonic' },
    { name: 'Mint Julep', recipe: 'Minze stampfen, 60cl Rye grún, Crushed ice, Angostura bitter garradinha, Limonello' },
    { name: 'Cuban ice tea', recipe: 'Eistee 6cl, Havanna Rum, 1 Zitrone, 2 Aquafaba' },
    { name: 'Moscow Mule', recipe: '50ml Ron proibido, 10ml Ancho braun, 20ml Schokosirup, 10ml Haselnuss, Espresso???' },
    { name: 'Hugo', recipe: '2cl Holundersirup, Minze, Sekt, Sprudelwasser, ½ Limette, Limettenschale' },
    { name: 'Espresso Martini', recipe: 'Kaltes Glas , Martini, Espresso, 6cl Vodka, Schokoladen bitters' },
    { name: 'Dry Martini', recipe: '75cl Gin, 15cl Vermouth trocken, Tropfen Orange bitters' },
    { name: 'Old fashioned', recipe: '6cl Rye Whiskey, 1cl-1,5cl Sirup, Orangenschale' }
  ]

  getDrinks(): Observable<Drink[]> {
    return of(this.drinks);
  }

}
