import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { faFileDownload, faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithubAlt = faGithubAlt;



  constructor() { }


  ngOnInit() {


  }




}
