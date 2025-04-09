import { Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'pipes', pathMatch: 'full'},
    {path: 'pipes', component: PipesComponent},
    {path: 'estructural', component: EstructuralComponent},
    {path: 'compra', component: ListadoComponent,
        canActivate: [authGuard],
        children: [
        {path: 'nueva', component: NuevaCompraComponent},
        {path: 'historial', component: HistorialCompraComponent}
    ]}
];
