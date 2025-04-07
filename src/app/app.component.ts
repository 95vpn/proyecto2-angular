import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtributoComponent } from "./atributo/atributo.component";
import { EstructuralComponent } from "./estructural/estructural.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ListadoComponent } from "./compra/listado/listado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtributoComponent, EstructuralComponent, PipesComponent, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto2';
}
