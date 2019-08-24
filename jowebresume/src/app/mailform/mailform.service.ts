import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MailformService {

  webApi = 'https://nameless-oasis-58993.herokuapp.com/';  // URL to web api


  constructor(private http: HttpClient) { }

  sendMail(dataMail): Observable<any> {
    return this.http.post(this.webApi, dataMail, httpOptions)
    
      //.pipe(
      //  catchError(this.handleError('addHero', hero))
      //);
  }

}
