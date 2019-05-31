import { Component } from '@angular/core';
import { Utenti } from './utenti.model';
import { UTENTE } from './utenti-mock';
import { Comments } from './comments.model';
import { COMMENTI } from './comments-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fine-anno';
  
  users: Utenti[];
  loggedUser: Utenti;
  comments: Comments[];
  
  constructor(){
   this.users  = UTENTE;
   this.loggedUser = new Utenti("","","","","");
   this.comments = COMMENTI;
  }
  
  
}
