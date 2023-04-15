import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditListingComponent } from './add-edit-listing.component';

describe('AddEditListingComponent', () => {
  let component: AddEditListingComponent;
  let fixture: ComponentFixture<AddEditListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
