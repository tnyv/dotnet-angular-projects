import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSalesUIComponent } from './sales-ui.component';

describe('PosSalesUIComponent', () => {
  let component: PosSalesUIComponent;
  let fixture: ComponentFixture<PosSalesUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSalesUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSalesUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
