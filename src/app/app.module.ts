import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { My2Component } from './components/my2/my2.component';
import { My3Component } from './components/my3/my3.component';
import { My4Component } from './components/my4/my4.component';
import { My5Component } from './components/my5/my5.component';
import { My6Component } from './components/my6/my6.component';
import { HttpClientModule } from '@angular/common/http';
import { My7Component } from './components/my7/my7.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component,
    My3Component,
    My4Component,
    My5Component,
    My6Component,
    My7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
