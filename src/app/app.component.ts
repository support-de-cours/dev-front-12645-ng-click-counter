import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../environments/environment.dev';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title:string = 'Click Counter';
  public counter: number = 0;
  private limit: number = environment.counterLimit;

  less(): void {
    if (this.counter <= this.limit*-1) {
      return;
    }

    this.counter--;
  }

  more(): void {
    if (this.counter >= this.limit) {
      return;
    }

    this.counter++;
  }
}
