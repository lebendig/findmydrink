import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/service/drink.service';


@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.scss']
})
export class DrinkFormComponent {

  drink: Drink = { name: '', recipe: '' };
  isEditMode = false;

  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
          this.isEditMode = true;
          this.drinkService.getDrinkById(Number(id)).subscribe(drink => this.drink = drink);
      }
  }

  saveDrink(): void {
      if (this.isEditMode) {
          this.drinkService.updateDrink(this.drink.id!, this.drink).subscribe(() => this.router.navigate(['/']));
      } else {
          this.drinkService.createDrink(this.drink).subscribe(() => this.router.navigate(['/']));
      }
  }
}
