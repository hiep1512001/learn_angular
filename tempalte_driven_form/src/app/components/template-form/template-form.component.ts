import { Component } from '@angular/core';
import { UserModel } from '../../model/users.class';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  public user:UserModel= new UserModel();
  onSubmitForm(frmUsser:NgForm){
    if(frmUsser.value){
      // console.log(frmUsser.value)
    }
  }
  onReset(frmUser:NgForm){
    // this.user=new UserModel();
    frmUser.reset();
  }
}
