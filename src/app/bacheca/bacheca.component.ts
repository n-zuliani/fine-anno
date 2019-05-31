import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comments } from '../comments.model';
import { Utenti } from '../utenti.model';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {
  
  myForm: FormGroup;
  @Input() comments: Comments[];
  @Input() user: Utenti;

  constructor(public fb: FormBuilder) { 
    this.myForm = fb.group({
      'titolo': ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  addComment(): boolean{
    
    if(this.myForm.valid){
      this.comments.push(new Comments(this.myForm.controls['titolo'].value, this.user, new Array<Comments>()));
    }
    
    return false;
  }
  

}
