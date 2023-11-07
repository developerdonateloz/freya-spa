import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './pages/productos/listaproductos/listaproductos.component';
import { EditarproductoComponent } from './pages/productos/editarproducto/editarproducto.component';
import { CrearproductoComponent } from './pages/productos/crearproducto/crearproducto.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CrearusuarioComponent } from './pages/usuarios/crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './pages/usuarios/editarusuario/editarusuario.component';
import { ListausuariosComponent } from './pages/usuarios/listausuarios/listausuarios.component';
import { ListagenerosComponent } from './pages/generos/listageneros/listageneros.component';
import { EditargeneroComponent } from './pages/generos/editargenero/editargenero.component';
import { CreargeneroComponent } from './pages/generos/creargenero/creargenero.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', title: 'Productos', component: ListaproductosComponent },
  { path: 'productos/edit/:id', component: EditarproductoComponent },
  { path: 'productos/create', component: CrearproductoComponent },

  { path: 'usuarios', title: 'Usuarios', component: ListausuariosComponent },
  { path: 'usuarios/edit/:id', component: EditarusuarioComponent },
  { path: 'usuarios/create', component: CrearusuarioComponent },

  { path: 'generos', title: 'Generos', component: ListagenerosComponent },
  { path: 'generos/edit/:id', component: EditargeneroComponent },
  { path: 'generos/create', component: CreargeneroComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
