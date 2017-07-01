import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {
public customerId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  let id=this.route.snapshot.params['id'];
  this.customerId=id;
  }

}
