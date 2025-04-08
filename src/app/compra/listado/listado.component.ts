import { Component } from '@angular/core';
import { NuevaCompraComponent } from "../nueva-compra/nueva-compra.component";
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NuevaCompraComponent, RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {

}
