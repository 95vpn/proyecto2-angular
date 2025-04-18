import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {

    this.todoService.posts$.subscribe((res) => {
      console.log('Nueva data:', res);
    })
  }

  
}
