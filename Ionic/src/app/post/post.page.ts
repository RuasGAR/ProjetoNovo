import { Component, OnInit } from '@angular/core';  
import { ServicePostService } from '../services/service-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  post;
  constructor(public postService: ServicePostService) { }
  
  ngOnInit() {
  }

  getPost(id):void{
      console.log(id);
      this.postService.getPost(id).subscribe(
          (res) => {
              console.log(res);
              this.post = res;
          }
      );
    }
}
