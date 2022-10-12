import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksCountComponent } from './clicks-count.component';

describe('ClicksCountComponent', () => {
  let component: ClicksCountComponent;
  let fixture: ComponentFixture<ClicksCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicksCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicksCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
