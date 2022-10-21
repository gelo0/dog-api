import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css'],
})
export class DogDetailsComponent implements OnInit {
  data: any;
  wikiUrl = '';
  @Input() breed = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.breed.split(' ')[0]) {
      let breedName = this.breed.split(' ')[0].toLowerCase();
      console.log(breedName);
      let apiurl = `https://dog.ceo/api/breed/${breedName}/images/random`;
      this.wikiUrl = `https://en.wikipedia.org/wiki/${breedName}`;
      if (this.breed.split(' ')[1]) {
        let breedSubName = this.breed.split(' ')[1].toLowerCase();
        console.log(`${breedName} ${breedSubName}`);
        apiurl = `https://dog.ceo/api/breed/${breedName}/${breedSubName}/images/random`;
        this.wikiUrl = `https://en.wikipedia.org/wiki/${breedSubName}_${breedName}`;
      }
      console.log(apiurl);
      this.http.get(apiurl).subscribe((Response) => {
        console.log(Response);
        this.data = Response;
        this.data = this.data.message.toString();
      });
    }
  }
}
