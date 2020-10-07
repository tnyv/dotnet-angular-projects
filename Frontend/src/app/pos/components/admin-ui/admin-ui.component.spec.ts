import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAdminUIComponent } from './admin-ui.component';

describe('PosAdminUIComponent', () => {
  let component: PosAdminUIComponent;
  let fixture: ComponentFixture<PosAdminUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosAdminUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosAdminUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
