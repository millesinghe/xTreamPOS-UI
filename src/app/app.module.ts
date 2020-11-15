import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashierViewComponent } from './cashier-view/cashier-view.component';
import { EnteritemComponent } from './enteritem/enteritem.component';
import { FilteritemComponent } from './filteritem/filteritem.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgNumericKeyboardModule } from 'ng-numeric-keyboard';
import { AppConfigService } from 'src/config/app-config.service';

export function initializeApp(appConfigService: AppConfigService) {
  return (): Promise<any> => { 
    return appConfigService.load();
  }
}

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
    HttpClientModule,
    FormsModule,

    NgNumericKeyboardModule,
   
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [ 
    AppConfigService,
    { provide: APP_INITIALIZER,useFactory: initializeApp, deps: [AppConfigService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
