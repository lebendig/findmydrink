import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinksComponent } from './component/drinks/drinks.component';
import { EditDrinkComponent } from './component/edit-drink/edit-drink.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AddDrinkComponent } from './component/add-drink/add-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    EditDrinkComponent,
    AddDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatPaginatorModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
