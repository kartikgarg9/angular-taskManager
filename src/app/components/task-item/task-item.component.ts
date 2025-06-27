import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onToggle = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<Task>();
}