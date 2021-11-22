import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorclickersComponent } from './colorclickers.component';

describe('ColorclickersComponent', () => {
  let component: ColorclickersComponent;
  let fixture: ComponentFixture<ColorclickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorclickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorclickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
