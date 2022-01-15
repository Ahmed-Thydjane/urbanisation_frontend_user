import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAdvertiserComponent } from './sign-up-advertiser.component';

describe('SignUpAdvertiserComponent', () => {
  let component: SignUpAdvertiserComponent;
  let fixture: ComponentFixture<SignUpAdvertiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAdvertiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
