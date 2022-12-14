import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FilterComponentComponent } from './filter-component/filter-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    FilterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
