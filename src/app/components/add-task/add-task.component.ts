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
  @Output() filterChanged = new EventEmitter<'All' | 'Completed' | 'Pending'>();

  title = '';
  description = '';
  priority: 'low' | 'medium' | 'high' = 'low';
  filter: 'All' | 'Completed' | 'Pending' = 'All';

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

  changeFilter(type: 'All' | 'Completed' | 'Pending') {
    this.filter = type;
    this.filterChanged.emit(type);
  }
}
