import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  constructor(public formbuilder: FormBuilder, public authService: AuthService, public router: Router) {

    this.loginForm = this.formbuilder.group({
      email:[null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

  }  

  ngOnInit() {}

  //função que abre pagina de Cadastro
  abrirCadastro (){
    this.router.navigate(['/cadastro']);
  }
  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  // Função disparada quando clicarmos no botão de login
  loginUsuario( form ) {

  	if ( form.status == "VALID" ) {
      console.log(form.status);
      
  		this.authService.logarUsuario( form.value ).subscribe(
  			(res) => {
				console.log( res.message );
				localStorage.setItem( 'userToken', res.data.token );
				this.router.navigate(['/tab1', {salve: "o_corinthia"}]);
        }, (error) => {
          console.log(error);
        }
        
  		);

  	}

  }



}
