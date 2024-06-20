import { Component } from '@angular/core';
import { MovieService } from '../../services/MovieService';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent {
  public _movieService:MovieService
  public name:string='';
  public link:string='';
  public author:string='';
  constructor(_movieService:MovieService){
  this._movieService=_movieService
  }
  onClick():void{
    this._movieService.addMovie(this.name,this.link,this.author);
  }
}
