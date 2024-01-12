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
import { My8Component } from './components/my8/my8.component';
import { My9Component } from './components/my9/my9.component';
import { HomeComponent } from './without-testbed/home/home.component';
import { HomeTestbedComponent } from './without-testbed/home-testbed/home-testbed.component';
import { MyFeatureComponent } from './without-testbed/test-without-testbed/my-features/my-feature/my-feature.component';
import { MyParentComponent } from './without-testbed/test-without-testbed/child-parent/my-parent/my-parent.component';
import { MyFeatureChildComponent } from './without-testbed/test-without-testbed/child-parent/my-feature/my-feature-child.component';
import { DemoOneComponent } from './components/jest-demo/demo-one/demo-one.component';
import { BookListModule} from './cart-project/book/book-list/book-list.component';
import { MatchersComponent } from './angular-jest-tuto/components/matchers/matchers.component';
import { DataComponent } from './angular-jest-tuto/components/data/data.component';
import { AsynchronousComponent } from './angular-jest-tuto/components/asynchronous/asynchronous.component';
import { FolderNameModule } from './folder-unit-IT-tests/components/folderName-shallow-unit-tests/folder-name.component';
import { MonComponent } from './mes-composants/mon-component/mon/mon.composant.component';
import { MonOutputComponent } from './mes-composants/mon-component/output/mon-output/mon-output.component';
import { MyUserComponent } from './mes-composants/mes-services/my-user/component/my-user.component';
import { MyUsersComponent } from './mes-composants/mes-services/my-users/component/my-users.component';
import { SignupComponent } from './mes-composants/mes-formulaires/sign-up/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component,
    My3Component,
    My4Component,
    My5Component,
    My6Component,
    My7Component,
    My8Component,
    My9Component,
    HomeComponent,
    HomeTestbedComponent,
    MyFeatureComponent,
    MyParentComponent,
    MyFeatureChildComponent,
    DemoOneComponent,
    MatchersComponent,
    DataComponent,
    AsynchronousComponent,
    MonComponent,
    MonOutputComponent,
    MyUserComponent,
    MyUsersComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // import the BookListModule for display the BookList in App Component view
    BookListModule,
    // import the FolderNameModule for display the FolderName in App Component view
    FolderNameModule
  ],
  // service not injectable in the root app, so we need to provide it in the app module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
