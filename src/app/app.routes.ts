import { Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';

export const routes: Routes = [
    {path: 'pipes', component: PipesComponent},
    {path: 'estructural', component: EstructuralComponent},
    {path: 'compra', component: ListadoComponent, children: [
        {path: 'nueva', component: NuevaCompraComponent},
        {path: 'historial', component: HistorialCompraComponent}
    ]}
];
