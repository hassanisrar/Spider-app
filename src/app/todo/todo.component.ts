import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo = null;

  // 1) first injecting HttpClient service in to constructor
  // 2)  overwriding posts variable value with httpClient function response
  constructor(private http: HttpClient) {
    console.log(this.todo, 1);
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(response => {
        this.todo = response;
        console.log(this.todo, 2);
      });
    console.log(this.todo, 3);
  }
}
