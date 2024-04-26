import { Routes } from '@angular/router';
import { ListarCifradoComponent } from './Componentes/listar-cifrado/listar-cifrado.component';
import { ListarDescifradoComponent } from './Componentes/listar-descifrado/listar-descifrado.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';
import { ListarComponent } from './Componentes/listar/listar.component';

export const routes: Routes = [
  {
    path: 'listarCifrado',
    component: ListarCifradoComponent,
  },
  {
    path: 'listarDescifrado',
    component: ListarDescifradoComponent,
  },
	{
		path: 'registrar',
		component: RegistrarComponent
	},
	{
		path: 'listar',
		component: ListarComponent
	}
];
