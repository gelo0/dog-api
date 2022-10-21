import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Psinstagram';
  selectedBreed = '';

  changeSelectedBreed(breed: string) {
    this.selectedBreed = breed;
  }
}
