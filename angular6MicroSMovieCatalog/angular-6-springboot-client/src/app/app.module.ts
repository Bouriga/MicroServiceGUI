import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpModule } from '@angular/http';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { CreateRatingComponent } from './create-rating/create-rating.component';
import { RatingDetailsComponent } from './rating-details/rating-details.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { UpdateRatingComponent } from './update-rating/update-rating.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    MovieDetailsComponent,
    MovieListComponent,
    UpdateMovieComponent,
    CreateRatingComponent,
    RatingDetailsComponent,
    RatingListComponent,
    UpdateRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
