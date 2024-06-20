import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/MovieService';
import { Movie } from '../../models/movie.class';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  private _movieSerview:MovieService
  public movies:Movie[] =[];
  constructor( _movieSerview:MovieService){
    this._movieSerview=_movieSerview;
  }
  ngOnInit(): void {
    this.movies=this._movieSerview.movies;
    console.log(this.movies);
  }
}
