import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private backendUrl = environment.backendUrl;


  constructor(private http: HttpClient,private router: Router) {
   }

  getTasks(): Observable<any>{
    const url = `${this.backendUrl}`;
    return this.http.get(url);
  }

  addTask(task:Task): Observable<Task> {
    const url = `${this.backendUrl}`;
    return this.http.post<Task>(url, task,this.httpOptions);
  }

  updateTask(id:number): Observable<any>{
    const url = `${this.backendUrl+"/"+id}`;
    return this.http.put<Task>(url,null,this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
}
