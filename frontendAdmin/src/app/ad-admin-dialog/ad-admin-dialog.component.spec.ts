import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAdminDialogComponent } from './ad-admin-dialog.component';

describe('AdAdminDialogComponent', () => {
  let component: AdAdminDialogComponent;
  let fixture: ComponentFixture<AdAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
