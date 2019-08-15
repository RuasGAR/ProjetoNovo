import { Component, OnInit } from '@angular/core';
import { ServicePostService } from '../../services/service-post.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

  previews = [];
  selectedPreview = -1;

  constructor(public postService: ServicePostService) { }

  ngOnInit() {}

  getPosts(): void {
		this.postService.getPosts().subscribe(
			(res) => {
				window.location.href = res;
			}
		);
  }

  getPost(id):void{
    console.log(id);
    this.postService.getPost(id).subscribe(
        (res) => {
            console.log(res);
        }
    );
  }
  
  
}


