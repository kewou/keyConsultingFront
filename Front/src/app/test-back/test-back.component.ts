import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from  './task';

@Component({
  selector: 'app-test-back',
  templateUrl: './test-back.component.html',
  styleUrls: ['./test-back.component.scss']
})
export class TestBackComponent implements OnInit {

  tasks: Task[] = [];
  newTask: Task = { label: '', completed: false };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks():void{
    this.taskService.getTasks().subscribe((data) => {
      this.tasks=data;
    });
  }

  addTaskSubmit(): void{
    if (this.newTask.label.trim() === '') {
      return;
    }
    this.taskService.addTask(this.newTask).subscribe((addedTask) =>{
      this.getTasks();
    });
    this.newTask = { label: '', completed: false };
  }

  updateTask(id:number){
    this.taskService.updateTask(id).subscribe((updatedTask) =>{
      this.getTasks();
    });
  }

}
