import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BachecaComponent } from './bacheca/bacheca.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    BachecaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
