import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdvertiserComponent } from './admin-advertiser.component';

describe('AdminAdvertiserComponent', () => {
  let component: AdminAdvertiserComponent;
  let fixture: ComponentFixture<AdminAdvertiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdvertiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
