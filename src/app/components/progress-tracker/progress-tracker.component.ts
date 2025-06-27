import { Component, Input } from '@angular/core';
import { Task } from '../../models/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.css']
})
export class ProgressTrackerComponent {
  @Input() tasks: Task[] = [];

  get completed(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  get percentage(): number {
    return this.tasks.length === 0 ? 0 : (this.completed / this.tasks.length) * 100;
  }
}
