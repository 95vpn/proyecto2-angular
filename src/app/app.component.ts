import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AtributoComponent } from "./atributo/atributo.component";
import { EstructuralComponent } from "./estructural/estructural.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ListadoComponent } from "./compra/listado/listado.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtributoComponent, EstructuralComponent, PipesComponent, ListadoComponent, RouterModule, CommonModule, HeaderComponent, HttpClientModule, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto2';

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('id', '1234');
    }
  }
}
