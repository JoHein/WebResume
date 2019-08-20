import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class AboutComponent implements OnInit {
  fadeIn: any;

  constructor() { }

  ngOnInit() {
  }

}
