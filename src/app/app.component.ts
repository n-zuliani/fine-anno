import { Component } from '@angular/core';
import { Utenti } from './utenti.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fine-anno';
  
  users: Utenti[];
  
  constructor(){
   this.users  = new Array <Utenti>();
  }
  
  
}
