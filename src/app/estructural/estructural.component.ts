import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estructural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estructural.component.html',
  styleUrl: './estructural.component.scss'
})
export class EstructuralComponent {
  isError = false;

  sections = [
    'Instroduccion',
    'Usos de Angular',
    'Instalacion del entorno',
    'CLI',
    'Componentes',
  ]

  sections1 = [
    {id: 1, name: 'Introduccion', duracion: '10.00'},
    {id: 2, name: 'Usos de angular', duracion: '5.00'},
    {id: 3, name: 'Instalacion del entorno', duracion: '20.00'},
    
    
  ]

  constructor() {
    /*
    setTimeout(() => {
      this.isError = true;
    }, 4000)
    */

    setTimeout(() => {
      this.sections1.push({id: 4, name: 'CLI', duracion: '10.00'});
      this.sections1.push({id: 5, name: 'Componetes', duracion: '52.00'});
    }, 4000)
    
    
  }

  showError() {
    this.isError = true;
  }
  
}
