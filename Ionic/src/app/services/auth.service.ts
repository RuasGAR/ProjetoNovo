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

  registrarUsuario( form ): Observable<any> {
  	return this.http.post( this.apiUrl + 'register', form, this.httpHeaders );
  }

}
