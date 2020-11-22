import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTransfertComponent } from './create-transfert/create-transfert.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TransfertService} from "./transfert.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CreateTransfertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TransfertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
