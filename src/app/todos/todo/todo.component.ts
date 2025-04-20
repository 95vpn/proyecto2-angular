import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { map } from 'rxjs';

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

    this.todoService.posts$.pipe(
      map( res => {
        console.log(res);
        res = ['uno', 'dos', 'tres', 'cuatro'];
        return res;
      })
    ).subscribe((res) => {
      console.log('Nueva data:', res);
    })
  }

  
}
