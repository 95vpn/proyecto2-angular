import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPipe } from './estados.pipe';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, EstadosPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})


export class PipesComponent {
  name = 'kevin';
  apellido = 'DAVILA';
  date = '2020-02-20T13:59:31.2387';

  estado = 0;

  changeState() {
    this.estado = 1;
  }
}
