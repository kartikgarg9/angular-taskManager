import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskComponent] // Because it's a standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit taskCreated event on valid form submission', () => {
    // Arrange
    const taskSpy = spyOn(component.taskCreated, 'emit');
    component.title = 'Test Task';
    component.description = 'Test description';
    component.priority = 'high';

    // Act
    component.onSubmit();

    // Assert
    expect(taskSpy).toHaveBeenCalled();
    const emittedTask = taskSpy.calls.mostRecent().args[0];
    expect(emittedTask).toBeDefined();
    if (emittedTask) {
      expect(emittedTask.title).toBe('Test Task');
      expect(emittedTask.description).toBe('Test description');
      expect(emittedTask.priority).toBe('high');
      expect(emittedTask.completed).toBeFalse();
    }
  });

  it('should not emit taskCreated if title is empty', () => {
    const taskSpy = spyOn(component.taskCreated, 'emit');
    component.title = '  '; // Only whitespace
    component.onSubmit();
    expect(taskSpy).not.toHaveBeenCalled();
  });

  it('should reset form fields after submission', () => {
    component.title = 'Reset Test';
    component.description = 'Reset Desc';
    component.priority = 'medium';

    component.onSubmit();

    expect(component.title).toBe('');
    expect(component.description).toBe('');
    expect(component.priority).toBe('low');
  });
});