import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureLaunchListComponent } from './future-launch-list.component';

describe('FutureLaunchListComponent', () => {
  let component: FutureLaunchListComponent;
  let fixture: ComponentFixture<FutureLaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureLaunchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureLaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
