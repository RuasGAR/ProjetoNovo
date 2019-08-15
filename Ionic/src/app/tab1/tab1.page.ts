import { Component } from '@angular/core';
import { ServicePostService } from '../services/service-post.service';

import { Router } from '@angular/router'; 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  posts = [];
  constructor(public router: Router, public postService: ServicePostService) {}

  newpost(){
    this.router.navigate(['/newpost']);
  } 

  ngOnInit(){}
    
}  