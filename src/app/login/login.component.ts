import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utenti } from '../utenti.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userList: Utenti[];
  logForm: FormGroup;
  show: boolean = true;
  correct: boolean = true;


  constructor(public fb: FormBuilder) { 
    this.logForm = fb.group({
      'username': ['',Validators.required],
      'password': ['',Validators.required]
    });
  }

  ngOnInit() {
  }
  
  onLogin(): boolean{
    let t = 0;
    for(let i = 0; i<this.userList.length; i++){
      if(this.logForm.controls['username'].value==this.userList[i].username && this.logForm.controls['password'].value==this.userList[i].password){
        t = 1;
      }
    }
    if(t==1){
      this.show = false;
      this.correct = true;
    }else{
      this.correct = false;
    }
    return false;
  }

}
