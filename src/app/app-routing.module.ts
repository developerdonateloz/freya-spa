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
import { ListacoloresComponent } from './pages/colores/listacolores/listacolores.component';
import { EditarcolorComponent } from './pages/colores/editarcolor/editarcolor.component';
import { CrearcolorComponent } from './pages/colores/crearcolor/crearcolor.component';
import { ListatamaniosComponent } from './pages/tamanios/listatamanios/listatamanios.component';
import { ListamediospagoComponent } from './pages/mediospago/listamediospago/listamediospago.component';
import { EditartamanioComponent } from './pages/tamanios/editartamanio/editartamanio.component';
import { CreartamanioComponent } from './pages/tamanios/creartamanio/creartamanio.component';
import { CrearmediopagoComponent } from './pages/mediospago/crearmediopago/crearmediopago.component';
import { EditarmediopagoComponent } from './pages/mediospago/editarmediopago/editarmediopago.component';
import { ListamaterialesComponent } from './pages/materiales/listamateriales/listamateriales.component';
import { EditarmaterialComponent } from './pages/materiales/editarmaterial/editarmaterial.component';
import { CrearmaterialComponent } from './pages/materiales/crearmaterial/crearmaterial.component';

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

  { path: 'colores', title: 'Colores', component: ListacoloresComponent },
  { path: 'colores/edit/:id', component: EditarcolorComponent },
  { path: 'colores/create', component: CrearcolorComponent },

  {
    path: 'materiales',
    title: 'Materiales',
    component: ListamaterialesComponent,
  },
  { path: 'materiales/edit/:id', component: EditarmaterialComponent },
  { path: 'materiales/create', component: CrearmaterialComponent },

  {
    path: 'mediospago',
    title: 'Medios de Pago',
    component: ListamediospagoComponent,
  },
  { path: 'mediospago/edit/:id', component: EditarmediopagoComponent },
  { path: 'mediospago/create', component: CrearmediopagoComponent },

  { path: 'tamanios', title: 'Tamaños', component: ListatamaniosComponent },
  { path: 'tamanios/edit/:id', component: EditartamanioComponent },
  { path: 'tamanios/create', component: CreartamanioComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
