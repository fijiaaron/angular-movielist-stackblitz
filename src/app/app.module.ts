import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MoviesService } from './movies.service';
import { MovieListComponent } from './movie-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MovieListComponent],
  bootstrap: [AppComponent],
  providers: [MoviesService]
})
export class AppModule {}
