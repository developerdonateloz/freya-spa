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
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'productos', title: 'Productos', component: ListaproductosComponent },
  { path: 'productos/edit/:id', component: EditarproductoComponent },
  { path: 'productos/create', component: CrearproductoComponent },

  { path: 'usuarios', title: 'Usuarios', component: ListausuariosComponent },
  {
    path: 'usuarios/edit/:id',
    component: EditarusuarioComponent,
    canActivate: [AuthGuard],
  },
  { path: 'usuarios/create', component: CrearusuarioComponent },

  {
    path: 'generos',
    title: 'Generos',
    component: ListagenerosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'generos/edit/:id',
    component: EditargeneroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'generos/create',
    component: CreargeneroComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'colores',
    title: 'Colores',
    component: ListacoloresComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'colores/edit/:id',
    component: EditarcolorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'colores/create',
    component: CrearcolorComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'materiales',
    title: 'Materiales',
    component: ListamaterialesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'materiales/edit/:id',
    component: EditarmaterialComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'materiales/create',
    component: CrearmaterialComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'mediospago',
    title: 'Medios de Pago',
    component: ListamediospagoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mediospago/edit/:id',
    component: EditarmediopagoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mediospago/create',
    component: CrearmediopagoComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'tamanios',
    title: 'Tamaños',
    component: ListatamaniosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tamanios/edit/:id',
    component: EditartamanioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tamanios/create',
    component: CreartamanioComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
