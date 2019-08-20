import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class LandingComponent implements OnInit {

  fadeIn: any;

  faFileDownload = faFileDownload;

  constructor() { }

  ngOnInit() {
  }

}
