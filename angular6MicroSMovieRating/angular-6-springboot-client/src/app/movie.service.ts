import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8084/ratings/all';
  private baseUrlInfo = 'http://localhost:8081/movies/movieById';
  private baseAdd ='http://localhost:8084/ratings/add';
  private baseDelete = 'http://localhost:8084/ratings/delete';
  private baseUpdate = 'http://localhost:8084/ratings/update';

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
    formData.append('userName', myform.userName);
    formData.append('movieName', myform.movieName);
    formData.append('rating', myform.rating);
    
    
    const req = new HttpRequest('POST', 'http://localhost:8084/ratings/update' + "/" + this.id, formData, {

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
