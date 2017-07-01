import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { StudentComponent} from './Student.component/student.component';
import {ComponentRoutingModule} from './component-routing';
import {routingComponents} from './component-routing';
import { CustomerslistComponent } from './customerslist/customerslist.component';

@NgModule({
  declarations: [
    AppComponent,StudentComponent,routingComponents, CustomerslistComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ComponentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
public childData:String;
 }
