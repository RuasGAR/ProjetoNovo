import { Component, OnInit } from '@angular/core';
import { ServicePostService } from '../../services/service-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

  previews = [];
  selectedPreview = -1;

  constructor(public postService: ServicePostService, private url: ActivatedRoute) {
    console.log( this.url.snapshot.params );
  }

  ngOnInit() {
    this.postService.getPosts().subscribe( (res) => {
      console.log( res );
      this.previews = res;
    });
  }
  

  // getPosts(): void {
	// 	this.postService.getPosts().subscribe(
	// 		(res) => {
	// 			window.location.href = res;
	// 		}
	// 	);
  // }

  
  
}


