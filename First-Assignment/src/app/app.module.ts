import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HRMSModule } from './hrms/hrms.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,HRMSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
