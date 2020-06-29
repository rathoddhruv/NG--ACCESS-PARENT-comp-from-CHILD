import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  HomeComponentComponent,
                  AComponentComponent, 
                  BComponentComponent 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
