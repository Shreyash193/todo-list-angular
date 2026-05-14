import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosItems } from './todos-items';

describe('TodosItems', () => {
  let component: TodosItems;
  let fixture: ComponentFixture<TodosItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosItems],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
