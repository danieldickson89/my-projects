import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFleetsComponent } from './my-fleets.component';

describe('MyFleetsComponent', () => {
  let component: MyFleetsComponent;
  let fixture: ComponentFixture<MyFleetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFleetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
