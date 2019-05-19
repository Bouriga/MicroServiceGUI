import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8082/movies';
  private baseUrlInfo = 'http://localhost:8081/movies/movieById';
  private baseAdd ='http://localhost:8081/movies/add';
  private baseDelete = 'http://localhost:8081/movies/delete';
  private baseUpdate = 'http://localhost:8081/movies/update';

  constructor(private http: HttpClient) { }

  getMoviee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrlInfo}/${id}`);
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseAdd}`, movie);
  }
  id = localStorage.getItem('idUser');
  updateMovie( myform: any): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    //formData=myform;
    formData.append('picture', myform.picture);
    formData.append('description', myform.description);
    formData.append('name', myform.name);
    
    
    const req = new HttpRequest('PUT', 'http://localhost:8081/movies/update' + "/" + this.id, formData, {

      reportProgress: true,

      responseType: 'text'

    }

    );
    return this.http.request(req);
    //return this.http.put(`${this.baseUpdate}/${id}`, value);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseDelete}/${id}`, { responseType: 'text' });
  }

  getMoviesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
