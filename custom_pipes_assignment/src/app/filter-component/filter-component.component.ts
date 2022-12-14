import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterdata='david';
   names:string[]=['anand','divya','dinesh','sunita','gopal',
   'iqra','hina','manisha','insha','pooja',
   'nauren','harshi','bhanu','priya','priyanka',
   'mukul','prashant','mohan','raju','junaid',
   'rakesh','rose','dan','mohit','mohini',
   'rashmi','divya','dinesh','sunita','gopal',
   'ram','rachel','rakul','neena','jack',
   'rose','john','david','jill','mike',
   'mack','monte','david','fazal','liza',
   'kushi','kose','david','josh','mosh'];

}
