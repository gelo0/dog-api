import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

@NgModule({
  declarations: [AppComponent, DogsListComponent, DogDetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
