import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/tasks';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() taskCreated = new EventEmitter<Task>();

  title = '';
  description = '';
  priority: 'low' | 'medium' | 'high' = 'low';

  onSubmit() {
    if (!this.title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      priority: this.priority,
      completed: false
    };

    this.taskCreated.emit(newTask);

    this.title = '';
    this.description = '';
    this.priority = 'low';
  }
}
