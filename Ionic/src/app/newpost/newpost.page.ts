import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { ServicePostService } from '../services/service-post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {

  myPhoto;

  registerForm: FormGroup;  
  constructor(public formbuilder: FormBuilder, 
    private camera:Camera,private storage:Storage,
    public postService: ServicePostService
    ) 

    { 
    this.registerForm = this.formbuilder.group({
      text:[null, [Validators.required]],
      name:[null, [Validators.required]],
    });
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
 
    this.camera.getPicture(options).then(
      (imageData) => {
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        console.log('data:image/jpeg;base64,' + imageData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

 
  ngOnInit() {
  }

  createPost(name:string, username:string, text:string, image:string){
    this.postService.createPost(this.registerForm).subscribe((res)=>{console.log(res);});
  }

  




}

 

