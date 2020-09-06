import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosNavComponent } from './pos-nav.component';

describe('PosNavComponent', () => {
  let component: PosNavComponent;
  let fixture: ComponentFixture<PosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
