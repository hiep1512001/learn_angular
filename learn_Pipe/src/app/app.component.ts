import { ComponentToViewComponent } from './../../../demoproject/src/app/components/component-to-view/component-to-view.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lear_Pipe_hello';
  public content:string='Object cách sử dụng căn bản trong Typescript cũng đơn giản như các các bạn tìm hiểu về mảng. Khi bạn định nghĩa các thuộc tính trong Object, thì kiểu dữ liệu của các thuộc tính trong phần tử cũng sẽ đi xuyên suốt quá trình làm việc. Cùng xem ví dụ dưới đây:';
  public amount:number=35.142567;
}
