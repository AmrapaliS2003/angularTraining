import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMainComponent } from './color-main.component';

describe('ColorMainComponent', () => {
  let component: ColorMainComponent;
  let fixture: ComponentFixture<ColorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
