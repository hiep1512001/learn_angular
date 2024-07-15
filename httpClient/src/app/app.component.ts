import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// service
import { TodoService } from './service/todo.service';
import { ToDo } from './model/todo.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  public id:number=0;
  public title:string="";
  public completed:boolean=true;
  public todoList :ToDo[]|undefined;
  public data: any;
  public subScription:Subscription|undefined;
  constructor(public _toDoSerVice:TodoService){}
  ngOnDestroy(): void {
    if(this.subScription){
      this.subScription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.loadData();  
  }
  loadData(){
    this.subScription =this._toDoSerVice.getAllToDo().subscribe(data=>{
      this.todoList=data
      console.log(this.todoList)
    }, error =>{
      this._toDoSerVice.handleError(error);
    });
  }
  onClick():void{
    var todo= new ToDo(this.id,this.title,this.completed)
    this.subScription =this._toDoSerVice.addToDo(todo).subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }
  Chuyendata(){
    this.data =[
        {
        id:1,
        title:"title1",
        completed:true
        },
        {
        id:2,
        title:"title2",
        completed:true
        },
        {
        id:3,
        title:"title3",
        completed:false
        },
        {
        id:4,
        title:"title4",
        completed:true
        },
        {
        id:5,
        title:"title5",
        completed:true
        },
        {
        id:6,
        title:"title6",
        completed:false
        },
        {
        id:7,
        title:"title7",
        completed:true
        },
        {
        id:8,
        title:"title8",
        completed:false
        }
        ]
    var JsonString = JSON.stringify(this.data);
    console.log(JsonString)
  }
}
