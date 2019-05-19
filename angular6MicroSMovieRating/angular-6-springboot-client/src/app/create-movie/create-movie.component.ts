import { MovieService } from '../movie.service';
import { Rating } from '../movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie: Rating = new Rating();
  submitted = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = new Rating();
  }

  save() {
    this.movieService.createMovie(this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Rating();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
