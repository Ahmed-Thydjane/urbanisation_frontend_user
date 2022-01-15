import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmindialogComponent } from './add-admindialog.component';

describe('AddAdmindialogComponent', () => {
  let component: AddAdmindialogComponent;
  let fixture: ComponentFixture<AddAdmindialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmindialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdmindialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
