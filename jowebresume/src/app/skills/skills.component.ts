import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn} from 'ng-animate';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class SkillsComponent implements OnInit {
  fadeIn: any;

  constructor() { }

  ngOnInit() {
  }

}


