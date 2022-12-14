import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { HRComponent } from './hr/hr.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    HRComponent
  ],
  exports:[EmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class HRMSModule { }
