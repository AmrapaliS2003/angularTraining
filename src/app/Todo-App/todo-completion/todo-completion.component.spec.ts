import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompletionComponent } from './todo-completion.component';

describe('TodoCompletionComponent', () => {
  let component: TodoCompletionComponent;
  let fixture: ComponentFixture<TodoCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoCompletionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
