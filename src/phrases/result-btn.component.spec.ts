import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBtnComponent } from '../app/word-task/result-btn/result-btn.component';

describe('ResultBtnComponent', () => {
  let component: ResultBtnComponent;
  let fixture: ComponentFixture<ResultBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
