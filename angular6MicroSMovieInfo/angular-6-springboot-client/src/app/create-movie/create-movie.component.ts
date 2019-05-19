import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();
  submitted = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
  }

  save() {
    this.movieService.createMovie(this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
