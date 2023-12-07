import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { FormsModule } from '@angular/forms';
import { My2Component } from './components/my2/my2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
