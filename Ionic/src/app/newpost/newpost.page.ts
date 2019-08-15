import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {

  registerForm: FormGroup;  
  constructor(public formbuilder: FormBuilder) { 

    this.registerForm = this.formbuilder.group({
      text:[null, [Validators.required, Validators.maxLength(200)]],
      name:[null, [Validators.required, Validators.maxLength(40)]]
    });
    
  
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  ngOnInit() {
  }
}

 

