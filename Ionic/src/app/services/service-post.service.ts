import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  backendURL: string = 'http://localhost:8000/api/'; 

  constructor(public http: HttpClient) { }

  public getPosts():Observable<any> {
    return this.http.get(this.backendURL + 'post');
  }
  
  public getPost(id):Observable<any> {
    return this.http.get(
        this.backendURL + 'post/' + id);
}

  public createPost(post):Observable<any> {
    return this.http.post(
      this.backendURL + 'post', {
        name: post.name,
        text: post.text,
        username:post.user_id.name,
        image: post.photo
      });
  }

  
} 
