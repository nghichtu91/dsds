import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DndModule} from 'ng2-dnd';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, DndModule.forRoot()],
  declarations: [ AppComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }