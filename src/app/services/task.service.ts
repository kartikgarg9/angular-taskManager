import { Injectable } from '@angular/core';
import { Task } from '../models/tasks';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'tasks';

  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return of(tasks);
  }

  addTask(task: Task): Observable<Task> {
    const tasks = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    task.id = Date.now(); // use timestamp as a simple ID
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return of(task);
  }

  updateTask(updatedTask: Task): Observable<Task> {
    let tasks = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    tasks = tasks.map((task: Task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return of(updatedTask);
  }

  deleteTask(task: Task): Observable<void> {
    let tasks = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    tasks = tasks.filter((t: Task) => t.id !== task.id);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return of(undefined);
  }
}
