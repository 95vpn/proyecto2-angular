import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { map, tap } from 'rxjs';


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
      map( (res: number[]) => {
        console.log(res);
        return res.filter( num => num > 3 );
      }),
      tap( (res) =>{
        console.log("desde el tap: ", res);
      })
    ).subscribe((res) => {
      console.log('Nueva data:', res);
    })
  }

  
}
