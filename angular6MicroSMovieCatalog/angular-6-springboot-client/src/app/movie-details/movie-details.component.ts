import { Movie } from '../movie';
import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService, private listComponent: MovieListComponent) { }

  ngOnInit() {
  }

}
