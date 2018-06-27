import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempconvComponent } from './tempconv.component';

describe('TempconvComponent', () => {
  let component: TempconvComponent;
  let fixture: ComponentFixture<TempconvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempconvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempconvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
