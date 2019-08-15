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

}
