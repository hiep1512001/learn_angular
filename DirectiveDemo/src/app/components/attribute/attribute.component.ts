import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})
export class AttributeComponent {
  public isSpecial:boolean=true;
  onToggle(){
    this.isSpecial=!this.isSpecial;
  }
  setClass(){
    return {'cl-red':this.isSpecial==true,
      'pd-10':this.isSpecial==true,
      'border-yellow':this.isSpecial==true,
      'border-cyan':this.isSpecial==false
    }
  }
  setStyle(){
    return{
      'border': this.isSpecial===true? 'solid 2px cyan':'',
      'padding.px': this.isSpecial===true?  '20':'',
      'color': this.isSpecial===true? 'red':''
      }
  }
}
