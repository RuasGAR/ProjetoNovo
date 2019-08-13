import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  registerForm: FormGroup;
  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null, [Validators.required , Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      username:[null, [Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8)]]
    });
   }

  ngOnInit() {
  }
  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

}
