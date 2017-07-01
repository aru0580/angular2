import { Injectable } from '@angular/core';

@Injectable()
export class StudentService{
	getStudents(){
	return [
 {
name:"Aravind Reddy",
id:"13B61A0536",
add:"Warangal"
 }
 ,{
name:"Vinod Reddy",
id:"13B61A0525",
add:"Mahabubnagar"
 },
 {
name:"Ravi Kumar",
id:"313228820040",
add:"Vizag"
 },
 {
 name:"Sravanthi Reddy",
id:"12271A05A4",
add:"Karimnagar"
 }
 ]
	}


}