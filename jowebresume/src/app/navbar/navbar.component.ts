import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class NavbarComponent implements OnInit {

  fadeIn: any;

  constructor() { }

  ngOnInit() {
  }

}
