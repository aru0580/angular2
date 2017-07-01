import { Component } from '@angular/core';
import {StudentService} from './service';
import {CustomerService} from './customerservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService,CustomerService]
})
export class AppComponent {
  title = 'Student Details';
  public childData:string;
}
