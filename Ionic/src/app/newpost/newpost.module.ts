import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
 
import { IonicModule } from '@ionic/angular';

import { NewpostPage } from './newpost.page';

const routes: Routes = [
  {
    path: '',
    component: NewpostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [NewpostPage],
  providers:[Camera]
})
export class NewpostPageModule {}
