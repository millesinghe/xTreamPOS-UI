import { Component, HostListener } from '@angular/core';
import { CashierViewComponent } from "./cashier-view/cashier-view.component";

export enum KEY_CODE {
  ArrowRight = 39,
  ArrowLeft = 37,
  ArrowUp = 38,
  ArrowDown = 40,
  Control = 17,
  Alt = 18,
  Escape = 27,
  NumpadAdd = 107,
  NumpadSubtract = 109,
  Space = 32
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xTreamPOS';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.ArrowUp) {
      console.log("increment");
    }

    if (event.ctrlKey && event.keyCode === KEY_CODE.ArrowDown) {
      console.log("Key Binding");
      CashierViewComponent.setfocus()
    }
  }

}
