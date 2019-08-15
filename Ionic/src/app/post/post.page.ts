import { Component, OnInit } from '@angular/core';  
import { ServicePostService } from '../services/service-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public postService: ServicePostService) { }

  getPost():void {
    this.postService.getPost().subscribe(
      (res) => {
        console.log(res);
      },
       (error) => {
        console.log(error);
      }
    );
  }      
  ngOnInit() {
  }

}
