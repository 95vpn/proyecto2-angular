import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodosService) { }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe( res => {
      console.log(res);
    }); 

  }
}
