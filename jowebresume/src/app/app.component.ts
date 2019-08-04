import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jo Heinen';
  public show: boolean = false;

  constructor(private router: Router) { }

  public ngOnInit() {
    this.show = false;
  }

  toggle() {

    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
