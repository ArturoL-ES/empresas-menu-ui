import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MenuComponent } from './app.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
