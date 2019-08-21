import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MailformComponent } from './mailform.component';

describe('MailformComponent', () => {
  let component: MailformComponent;
  let fixture: ComponentFixture<MailformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
