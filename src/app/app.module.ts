import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashierViewComponent } from './cashier-view/cashier-view.component';
import { EnteritemComponent } from './enteritem/enteritem.component';
import { FilteritemComponent } from './filteritem/filteritem.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CashierViewComponent,
    EnteritemComponent,
    FilteritemComponent,
    CartitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
