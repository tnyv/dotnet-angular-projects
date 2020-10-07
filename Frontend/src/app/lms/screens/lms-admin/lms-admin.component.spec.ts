import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsAdminComponent } from './lms-admin.component';

describe('LmsAdminComponent', () => {
  let component: LmsAdminComponent;
  let fixture: ComponentFixture<LmsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
