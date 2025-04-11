import { Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { authGuard } from './auth.guard';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pipes', pathMatch: 'full'},
    {path: 'pipes', component: PipesComponent},
    {path: 'estructural', component: EstructuralComponent},
    {path: 'compra', component: ListadoComponent,
        canActivate: [authGuard],
        children: [
        {path: 'nueva', component: NuevaCompraComponent},
        {path: 'historial', component: HistorialCompraComponent}
    ]},
    {
        path: 'venta',
        loadChildren: () =>
            import('./venta/venta.module').then((m) => m.VentaModule),
    },
    {path: 'formularios', component: FormularioComponent},
];
