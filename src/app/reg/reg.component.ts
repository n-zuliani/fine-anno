import { Component, OnInit, Input } from '@angular/core';
import { Utenti } from '../utenti.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  
  @Input() userList: Utenti[];
  regForm: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.regForm = fb.group({
      'name': ['',Validators.required],
      'surname': ['',Validators.required],
      'username': ['',Validators.required],
      'email': ['',Validators.required],
      'password': ['',Validators.required]
    });
  }

  ngOnInit() {
  }
  
  addUser(): boolean{
    if(this.regForm.valid){
       this.userList.push(new Utenti(this.regForm.controls['name'].value,this.regForm.controls['surname'].value,this.regForm.controls['username'].value,this.regForm.controls['email'].value,this.regForm.controls['password'].value));
    }
    return false;
  }

}
