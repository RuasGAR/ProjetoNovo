import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.page.html',
  styleUrls: ['./bemvindo.page.scss'],
})
export class BemvindoPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  //funcao que abre pagina de Login
  abrirLogin (){
    this.router.navigate(['/login']);
  }
  //funcao que abre pagina Home
  abrirHome (){
    this.router.navigate(['/tab1']);
  }

}
