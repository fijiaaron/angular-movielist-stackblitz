import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies = [];

  constructor() {}

  public getMovieList(): Observable<any> {
    const movies = [
      { title: 'Star Wars', year: 1977 },
      { title: 'The Empire Strikes Back', year: 1981 },
      { title: 'Return of the Jedi', year: 1984 }
    ];

    return of(movies);
  }
}
