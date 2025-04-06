import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})


export class PipesComponent {
  name = 'kevin';
  apellido = 'DAVILA';
  date = '2020-02-20T13:59:31.2387';

}
