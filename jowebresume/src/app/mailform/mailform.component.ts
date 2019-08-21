import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.css']
})
export class MailformComponent implements OnInit {

  mailForm: FormGroup;
  datMail = 'johei@ymail.com';

  constructor() { }

  ngOnInit() {

    this.mailForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'inputSubject': new FormControl('', [Validators.required]),
      'messageArea': new FormControl('', Validators.required),
      'recaptchaReactive': new FormControl('', Validators.required)
    });

  }

  mailMe(formData) {
    console.warn('Your order has been submitted', formData);
    window.location.href = "mailto:" + this.datMail + '&subject=' + formData.inputSubject +
      '&body=' + formData.messageArea + ' ' + formData.firstName + ' ' + formData.lastName;
  }

}
