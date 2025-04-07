import { Component } from '@angular/core';
import { NuevaCompraComponent } from "../nueva-compra/nueva-compra.component";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NuevaCompraComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {

}
