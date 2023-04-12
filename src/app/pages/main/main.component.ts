import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  properties: Array<number> = new Array<number>(1, 2, 3, 4);

  constructor() {
    localStorage.setItem("test", "test");
  }
}
