import { Observable } from "rxjs";
import { MovieService } from "../movie.service";
import { Movie } from "../movie";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.movies = this.movieService.getMoviesList();
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  modify(id: number) {
    this.router.navigateByUrl('/updateMovie');
    localStorage.setItem('idUser', JSON.stringify(id));
  }
  
}
