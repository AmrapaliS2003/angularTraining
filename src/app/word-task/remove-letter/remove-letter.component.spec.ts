import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLetterComponent } from './remove-letter.component';

describe('RemoveLetterComponent', () => {
  let component: RemoveLetterComponent;
  let fixture: ComponentFixture<RemoveLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
