import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { faFileDownload, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

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
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithubAlt = faGithubAlt;

  constructor() { }

  ngOnInit() {
  }

}
