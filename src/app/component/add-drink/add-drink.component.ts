import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.scss']
})
export class AddDrinkComponent {
  data: Drink = { name: '', recipe: '' };

  constructor(
    public dialogRef: MatDialogRef<AddDrinkComponent>,
    private drinkService: DrinkService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.drinkService.createOrUpdateDrink(this.data).subscribe(result => {
      this.dialogRef.close(result);
    }, error => {
      console.error('Error saving drink', error);
    });
  }
}
