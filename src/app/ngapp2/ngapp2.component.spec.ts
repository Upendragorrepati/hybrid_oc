import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngapp2Component } from './ngapp2.component';

describe('Ngapp2Component', () => {
  let component: Ngapp2Component;
  let fixture: ComponentFixture<Ngapp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngapp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
