import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent  {

  todos: any[] = [];

  constructor(private todoService: TodosService) { }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe( (res: any) => {
      console.log(res);

      this.todos = res;

      console.log(this.todos);
    }); 

    this.todoService.getComments(1).subscribe((res) => console.log('Comments: ', res));

    this.todoService.getPost().subscribe((res) => console.log('Posts: ', res));
  }
  
}
