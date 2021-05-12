import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies = [];

  constructor(private moviesService: MoviesService) {}

  loadMovieList() {
    this.moviesService.getMovieList().subscribe(movies => {
      this.movies = movies;
    });
  }

  ngOnInit(): void {
    this.loadMovieList();
  }
}
