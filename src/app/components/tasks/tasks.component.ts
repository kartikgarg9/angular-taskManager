import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ProgressTrackerComponent } from '../progress-tracker/progress-tracker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TaskItemComponent, ProgressTrackerComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  currentFilter: 'All' | 'Completed' | 'Pending' = 'All';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.applyFilter();
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(t => {
      this.tasks.push(t);
      this.applyFilter();
    });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(() => {
      this.applyFilter();
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      this.applyFilter();
    });
  }

  setFilter(filter: 'All' | 'Completed' | 'Pending') {
    this.currentFilter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.currentFilter === 'All') {
      this.filteredTasks = this.tasks;
    } else if (this.currentFilter === 'Completed') {
      this.filteredTasks = this.tasks.filter(t => t.completed);
    } else {
      this.filteredTasks = this.tasks.filter(t => !t.completed);
    }
  }
}
