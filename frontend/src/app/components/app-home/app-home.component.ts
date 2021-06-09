import { Component, OnInit } from '@angular/core';

import { AppNavComponent } from '../app-nav/app-nav.component';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  cimg1: any = '../../../assets/images/carousel/muscle-front-wallpaper.jpg';
  cimg2: any = '../../../assets/images/carousel/Transfagarasan.jpeg';
  cimg3: any = '../../../assets/images/carousel/cimg1.jpg';

  ngOnInit() {
  }

}
