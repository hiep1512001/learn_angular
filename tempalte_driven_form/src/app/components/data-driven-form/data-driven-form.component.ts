import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrl: './data-driven-form.component.css'
})
export class DataDrivenFormComponent implements OnInit, OnDestroy {
  public frmUser!: FormGroup;
  public subscription:Subscription|undefined;
  constructor(public _formBuilder :FormBuilder){}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.frmUser= this._formBuilder.group({
      username:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      password:['',[
        Validators.required
      ]],
      fullname:['',[
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(5)
      ]],
      email:['',
        Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')],
      phone:['',
        Validators.minLength(10)]
    });
    this.subscription=this.frmUser.valueChanges.subscribe(data=>{
      console.log(data);
    })
  };
  onSubmitForm(){
    console.log(this.frmUser);
  }
  onReset():void{
    this.frmUser.reset();
  }
}
