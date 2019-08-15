import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {

  myPhoto;

  registerForm: FormGroup;  
  constructor(public formbuilder: FormBuilder, private camera:Camera,private storage:Storage) { 

    this.registerForm = this.formbuilder.group({
      text:[null, [Validators.required, Validators.maxLength(200)]],
      name:[null, [Validators.required, Validators.maxLength(40)]]
    });
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
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
 
  ngOnInit() {
  }
}

 

