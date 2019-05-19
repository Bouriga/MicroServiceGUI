import { Component } from '@angular/core';
import { Movie } from './movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie MicroService Application';
  movie: Movie = new Movie();
  movieService: any;
  constructor(private router: Router) { }
  save() {
    console.log("test hey username "+this.movie.userName);
    localStorage.setItem('usernName', this.movie.userName);
    this.router.navigateByUrl('/movies');
    /*this.movieService.createMovie(this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();*/
  }

  onSubmit() {
    
    this.save();
  }
}
