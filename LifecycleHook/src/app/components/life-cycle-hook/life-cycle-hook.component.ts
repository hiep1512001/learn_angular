import { Component, OnInit,OnDestroy, Input, OnChanges, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrl: './life-cycle-hook.component.css'
})
export class LifeCycleHookComponent implements OnInit, OnDestroy,OnChanges,DoCheck {
  public previousTong:number|undefined
  @Input('tong') tong:number|undefined
  ngOnInit(): void {
    console.log('ngOnitLifecycle');
  }
  constructor(){
    console.log('ContructorLifecycle')
  }
  ngDoCheck(): void {
    console.log('ngDoCheckLifecycle');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChangesLifecycle');
    this.previousTong= changes['tong'].previousValue
  }
  ngOnDestroy(): void {
    console.log('ngDestroyLifecycle');
  }
}
