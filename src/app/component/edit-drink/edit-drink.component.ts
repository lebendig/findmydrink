import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.scss']
})
export class EditDrinkComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDrinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Drink,
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
      this.dialogRef.close();
    });
  }
}
