import { Component, OnInit} from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';
import { MatDialog } from '@angular/material/dialog';
import { Drink } from 'src/app/models/drink';
import { EditDrinkComponent } from '../edit-drink/edit-drink.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks: Drink[] = [];
  searchTerm: string = '';
  displayedColumns: string[] = ['name', 'recipe', 'actions'];

  constructor(
    private drinkService: DrinkService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  searchDrinks(): void {
    this.drinkService.searchDrinks(this.searchTerm).subscribe(data => {
      this.drinks = data;
    });
  }

  openEditDialog(drink: Drink): void {
    const dialogRef = this.dialog.open(EditDrinkComponent, {
      width: '400px',
      data: { ...drink } // Pass a copy of the drink data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Refresh the list after saving
        this.searchDrinks();
      }
    });
  }
}
