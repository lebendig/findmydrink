import { Component, OnInit} from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';
import { MatDialog } from '@angular/material/dialog';
import { Drink } from 'src/app/models/drink';
import { EditDrinkComponent } from '../edit-drink/edit-drink.component';
import { AddDrinkComponent } from '../add-drink/add-drink.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks: MatTableDataSource<Drink> = new MatTableDataSource<Drink>();
  searchTerm: string = '';
  displayedColumns: string[] = ['name', 'recipe', 'actions'];

  constructor(
    private drinkService: DrinkService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadDrinks();
  }

  loadDrinks(): void {
    this.drinkService.getDrinks().subscribe(data => {
      this.drinks.data = data;
    });
  }

  searchDrinks(): void {
    const filterValue = this.searchTerm.trim().toLowerCase();
    this.drinks.filter = filterValue;
  }

  openEditDialog(drink: Drink): void {
    const dialogRef = this.dialog.open(EditDrinkComponent, {
      width: '400px',
      data: { ...drink }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDrinks();
      }
    });
  }

  deleteDrink(id: number): void {
    if (confirm('Are you sure you want to delete this drink?')) {
      this.drinkService.deleteDrink(id).subscribe(() => {
        this.loadDrinks();
      }, error => {
        console.error('Error deleting drink', error);
      });
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDrinkComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDrinks();
      }
    });
  }
}
