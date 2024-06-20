import { Component,AfterContentInit, OnInit,AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-other-cycle-component',
  templateUrl: './other-cycle-component.component.html',
  styleUrl: './other-cycle-component.component.css'
})
export class OtherCycleComponentComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('value') value:ElementRef|undefined
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked:otherLifeCycle');
  }
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    // console.log(this.value);
    // console.log('ngAfterContentInit:otherLifeCycle')
  }
}
