import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Studdetail } from './studdetails.component';

describe('StuddetailsComponent', () => {
  let component: Studdetail;
  let fixture: ComponentFixture<Studdetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Studdetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Studdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
