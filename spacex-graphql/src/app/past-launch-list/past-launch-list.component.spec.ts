import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLaunchListComponent } from './past-launch-list.component';

describe('PastLaunchListComponent', () => {
  let component: PastLaunchListComponent;
  let fixture: ComponentFixture<PastLaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLaunchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
