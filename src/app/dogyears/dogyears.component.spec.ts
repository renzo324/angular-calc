import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogyearsComponent } from './dogyears.component';

describe('DogyearsComponent', () => {
  let component: DogyearsComponent;
  let fixture: ComponentFixture<DogyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
