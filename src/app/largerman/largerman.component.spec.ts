import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargermanComponent } from './largerman.component';

describe('LargermanComponent', () => {
  let component: LargermanComponent;
  let fixture: ComponentFixture<LargermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
