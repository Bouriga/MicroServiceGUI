import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { MovieService } from "./../movie.service";
import { Rating } from "../rating";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  //employee: Observable<any> ;
  private baseUpdate = 'http://localhost:8081/movies/update/';
  tab = [];
  @Input() movieData = { userName: '', movieName: '', rating: '' };
  constructor(private _http: Http,private movieService: MovieService, private httpClient: Http) { 
    var id = localStorage.getItem('idUser');
    this._http.get('http://localhost:8084/ratings/ratingById' + "/" + id).subscribe(data => {
      console.log(Object.values(data.json())[0]);
      //return data.json();

      //this.source.load(data.json());
      this.tab = Object.values(data.json());
      console.log(this.tab);
      

    });
  }

  ngOnInit() {
    //this.reloadData();
    
  }

 
  movie: Rating = new Rating();
  submitted = false;
  //employee:Employee[];


  newMovie(): void {
    this.submitted = false;
    
  }

  save() {
  
    this.movieData.userName = this.tab[0];
    this.movieData.movieName = this.tab[1];
    this.movieData.rating = this.tab[2];
    this.movieService.updateMovie(this.movieData).subscribe(data => {
      // do something, if upload success
      console.log(data);
      

    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
