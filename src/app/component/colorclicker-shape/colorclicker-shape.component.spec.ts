import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorclickerShapeComponent } from './colorclicker-shape.component';

describe('ColorclickerShapeComponent', () => {
  let component: ColorclickerShapeComponent;
  let fixture: ComponentFixture<ColorclickerShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorclickerShapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorclickerShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
