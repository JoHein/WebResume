import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))])
  ],
})
export class NavbarComponent implements OnInit {

  fadeInDown: any;

  constructor() { }

  ngOnInit() {
  }

}
