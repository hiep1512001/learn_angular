import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user-listview',
  templateUrl: './user-listview.component.html',
  styleUrl: './user-listview.component.css'
})
export class UserListviewComponent {
  @Input('users')users:any[]=[];
  @Input('fullname') fullname:string|undefined;
  @Input('phone') phone:number|undefined;
}
