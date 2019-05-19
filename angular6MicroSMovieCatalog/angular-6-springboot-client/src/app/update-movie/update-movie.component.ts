import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { MovieService } from "./../movie.service";
import { Movie } from "../movie";
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
  @Input() movieData = { name: '', description: '', picture: '' };
  constructor(private _http: Http,private movieService: MovieService, private httpClient: Http) { 
    var id = localStorage.getItem('idUser');
    this._http.get('http://localhost:8081/movies/movieById' + "/" + id).subscribe(data => {
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

  /*reloadData(){
    var id = JSON.parse(localStorage.getItem("idUser"));
    console.log("id equel"+id);
    this.employee = this.employeeService.getEmployee(id);
    console.log("sedf" + this.employee);
      
    //return this.employee;
    /*return this.http.get<Employee[]>('http://localhost:8081/movies/movieById' + "/" + id);
    this.http.get('http://localhost:8081/movies/movieById' + "/" + id).subscribe(data => {
      
      //return data.json();

      //this.source.load(data.json());
      console.log("tab"+data.toString());
      

    });
  }*/
  movie: Movie = new Movie();
  submitted = false;
  //employee:Employee[];


  newMovie(): void {
    this.submitted = false;
    
  }

  save() {
    /*var id = JSON.parse(localStorage.getItem("idUser"));
    this.employees = this.http.get('http://localhost:8081/movies/movieById' + "/" + id);
    console.log("employe value " + this.employees);
    this.employeeService.updateEmployee(id, this.employees)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employees = new Employee();*/
    
    /*var id = JSON.parse(localStorage.getItem("idUser"));
    console.log("id equel "+id);
    return this.httpClient.put(`${this.baseUpdate}` + id, movieData);*/
    /*if (this.movieData.picture == "") {

      this.movieData.picture = this.tab[2];
      

    }
    
    this.movieData.name = this.tab[0];
    this.movieData.description = this.tab[1];*/
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
