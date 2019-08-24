import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailformService } from './mailform.service';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.css'],
  providers: [MailformService],

})
export class MailformComponent implements OnInit {

  mailForm: FormGroup;
  datMail = 'johei@ymail.com';

  response: any;

  constructor(private mailFormService :MailformService) { }

  ngOnInit() {

    this.mailForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'emailInput': new FormControl('', [Validators.required]),
      'messageArea': new FormControl('', Validators.required),
      'recaptchaReactive': new FormControl('', Validators.required)
    });

  }

  mailMe(formData) {
    console.info('Your order has been submitted', formData);
    this.mailFormService.sendMail(formData).subscribe(data => {
      console.log(data);

        this.response = data
      console.log(this.response);

      window.alert(data.mailres);
    });

    //return email was successfuly sent

  }

}
