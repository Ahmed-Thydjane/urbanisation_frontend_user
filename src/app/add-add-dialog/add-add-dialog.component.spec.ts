import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddDialogComponent } from './add-add-dialog.component';

describe('AddAddDialogComponent', () => {
  let component: AddAddDialogComponent;
  let fixture: ComponentFixture<AddAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
