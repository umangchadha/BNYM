
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './../../material-module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMomentDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
