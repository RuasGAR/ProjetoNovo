import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  registerForm: FormGroup;
  constructor(public formbuilder: FormBuilder, public authService: AuthService, public router: Router) {
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
    //this.registrarUsuario(this.registerForm);
  }
  //funcao que abre pagina de Login
  abrirLogin (){
    this.router.navigate(['/login']);
  }

  registrarUsuario( form ) {

    // Se o formulário for válido
      if ( form.status == "VALID" ) {
        console.log(form.status);
  
      // Mandaremos a requisição para a API
        this.authService.registrarUsuario( form.value ).subscribe(
          ( res ) => {
            console.log( res );
            this.router.navigate(['/login']);
          },(error) => {
            console.log(error);
          }
        );
  
      }
  
  }
  

}
