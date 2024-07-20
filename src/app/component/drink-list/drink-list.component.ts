import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/service/drink.service';


@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {

  drinks: Drink[] = [];
  selectedDrink: Drink | null = null;
  searchQuery: string = '';

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
      this.loadDrinks();
  }

  loadDrinks(): void {
      this.drinkService.getDrinks().subscribe(drinks => this.drinks = drinks);
  }

  searchDrinks(): void {
      if (this.searchQuery.trim()) {
          this.drinkService.searchDrinks(this.searchQuery).subscribe(drinks => {
              this.drinks = drinks;
              this.selectedDrink = null; // Reset selected drink
          });
      } else {
          this.loadDrinks();
      }
  }

  selectDrink(drink: Drink): void {
      this.selectedDrink = drink;
  }

  deleteDrink(id: number): void {
      this.drinkService.deleteDrink(id).subscribe(() => this.loadDrinks());
  }

}
