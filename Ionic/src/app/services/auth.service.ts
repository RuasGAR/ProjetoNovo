import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //url api
  apiUrl: string = "http://localhost:8000/api/";
  // As headers da requisição
  httpHeaders: any = {
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	}
  }

  constructor( public http: HttpClient ) { }
  //funcao para cadastrar usuario
  registrarUsuario( form ): Observable<any> {
    console.log(form);
    return this.http.post( this.apiUrl + 'register', {
      'name':form.name,
      'username':form.username,
      'password':form.password,
      'email':form.email

    }, this.httpHeaders );
    
  }
  //funcao para logar usuario
  logarUsuario( form ): Observable<any> {
    console.log(form);
  	return this.http.post( this.apiUrl + 'login', {
      'email':form.email,
      'password':form.password
    }, this.httpHeaders);
  }


}
