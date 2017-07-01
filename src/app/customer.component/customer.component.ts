import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../customerservice';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],

})


export class CustomerComponent implements OnInit{
public status=false;
Customer=[];
errorMsg: string;
 constructor(private router: Router,private _customerservice : CustomerService){}
ngOnInit(){

  }
  onShowChange()
  {
  this.status=!this.status;
  this._customerservice.getCustomers().subscribe(resCustomerData=>this.Customer=resCustomerData,resErrorData=>this.errorMsg=resErrorData);
  }
  onSelect(cu){
  this.router.navigate(['/customerslist',cu.id]);
  }
}