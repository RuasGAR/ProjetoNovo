import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  backendURL: string = 'http://localhost:8000/api/'; 

  httpHeaders: any = {
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	}
  }

  constructor(public http: HttpClient) { }

  //Função que retorna todos os posts, utilizados para a Home
  public getPosts():Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.backendURL + 'post', this.httpHeaders );
  }
  
  //Função para pegar um post específico, que seria usada nas páginas específicas de posts
  public getPost(id):Observable<any> {
    return this.http.get(
        this.backendURL + 'post/' + id);
}
  //Função para criar um post
  public createPost(post,user):Observable<any> {
    this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(
      this.backendURL + 'post', {
        name: post.name,
        text: post.text,
        username:user,
        image: post.photo
      }, this.httpHeaders);
  }

  
} 
