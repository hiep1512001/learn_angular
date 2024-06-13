import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
    public title:string ='Two Way Bingding'
    public name:string="Nguyễn Hoàng Hiệp"
    public genre:number=0;
}
