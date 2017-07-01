import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CustomerComponent} from './customer.component/customer.component';
import {CustomerslistComponent} from './customerslist/customerslist.component';

const routes:Routes=[
{path:'customers',component:CustomerComponent},
{path:'customerslist/:id',component:CustomerslistComponent},
];

@NgModule({
	imports:[RouterModule.forRoot(routes)
	],
	exports:[
	RouterModule
	]
})
export class ComponentRoutingModule{}
export const routingComponents=[CustomerComponent,CustomerslistComponent]