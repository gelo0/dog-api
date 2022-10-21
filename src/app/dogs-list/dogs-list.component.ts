import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css'],
})
export class DogsListComponent implements OnInit {
  breedsObject: any;
  result: any;

  constructor(private http: HttpClient) {}

  @Output() selectedBreed = new EventEmitter<string>();

  onSelected(value: string): void {
    this.selectedBreed.emit(value);
  }

  ngOnInit(): void {
    this.http
      .get('https://dog.ceo/api/breeds/list/all')
      .subscribe((Response) => {
        function capitalize(string: String) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        this.breedsObject = Response;
        let breedsArray = Object.keys(this.breedsObject.message);
        this.result = [];
        breedsArray.forEach((breed) => {
          if (this.breedsObject.message[breed][0] == null) {
            this.result.push(capitalize(breed));
          } else {
            this.breedsObject.message[breed].forEach((sub: String) => {
              this.result.push(`${capitalize(breed)} ${capitalize(sub)}`);
            });
          }
        });
      });
  }
}
