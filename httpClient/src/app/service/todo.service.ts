import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public api='https://35289da4a658481189602c48145a7eb6.api.mockbin.io/';
  constructor(public _http:HttpClient){
  }
  public getAllToDo():Observable<ToDo[]>{
    return this._http.get<ToDo[]>(this.api)
  }
  public addToDo(todo:ToDo):Observable<ToDo[]>{
    return this._http.post<ToDo[]>(this.api, todo)
  }
  public handleError(err:any){
    if(err.error() instanceof Error){
      console.log("Client-side error: ${err.error.message}");
    }
    else{
      console.log("Server-side error: ${err.status} - ${err.error}")
    }
  }
}
