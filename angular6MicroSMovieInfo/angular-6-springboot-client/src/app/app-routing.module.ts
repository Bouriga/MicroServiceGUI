import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'updateMovie', component: UpdateMovieComponent },
  { path: 'add', component: CreateMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
