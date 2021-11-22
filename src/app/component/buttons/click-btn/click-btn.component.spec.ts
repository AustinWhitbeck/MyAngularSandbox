import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickBtnComponent } from './click-btn.component';

describe('ClickBtnComponent', () => {
  let component: ClickBtnComponent;
  let fixture: ComponentFixture<ClickBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
