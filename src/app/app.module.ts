import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './pages/productos/listaproductos/listaproductos.component';
import { CrearproductoComponent } from './pages/productos/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './pages/productos/editarproducto/editarproducto.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ListagenerosComponent } from './pages/generos/listageneros/listageneros.component';
import { CreargeneroComponent } from './pages/generos/creargenero/creargenero.component';
import { EditargeneroComponent } from './pages/generos/editargenero/editargenero.component';
import { ListausuariosComponent } from './pages/usuarios/listausuarios/listausuarios.component';
import { CrearusuarioComponent } from './pages/usuarios/crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './pages/usuarios/editarusuario/editarusuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ListacoloresComponent } from './pages/colores/listacolores/listacolores.component';
import { EditarcolorComponent } from './pages/colores/editarcolor/editarcolor.component';
import { CrearcolorComponent } from './pages/colores/crearcolor/crearcolor.component';
import { ListamaterialesComponent } from './pages/materiales/listamateriales/listamateriales.component';
import { CrearmaterialComponent } from './pages/materiales/crearmaterial/crearmaterial.component';
import { EditarmaterialComponent } from './pages/materiales/editarmaterial/editarmaterial.component';
import { ListamediospagoComponent } from './pages/mediospago/listamediospago/listamediospago.component';
import { CrearmediopagoComponent } from './pages/mediospago/crearmediopago/crearmediopago.component';
import { EditarmediopagoComponent } from './pages/mediospago/editarmediopago/editarmediopago.component';
import { ListatamaniosComponent } from './pages/tamanios/listatamanios/listatamanios.component';
import { CreartamanioComponent } from './pages/tamanios/creartamanio/creartamanio.component';
import { EditartamanioComponent } from './pages/tamanios/editartamanio/editartamanio.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    CrearproductoComponent,
    EditarproductoComponent,
    HomeComponent,
    NotfoundComponent,
    ListagenerosComponent,
    CreargeneroComponent,
    EditargeneroComponent,
    ListausuariosComponent,
    CrearusuarioComponent,
    EditarusuarioComponent,
    ListacoloresComponent,
    EditarcolorComponent,
    CrearcolorComponent,
    ListamaterialesComponent,
    CrearmaterialComponent,
    EditarmaterialComponent,
    ListamediospagoComponent,
    CrearmediopagoComponent,
    EditarmediopagoComponent,
    ListatamaniosComponent,
    CreartamanioComponent,
    EditartamanioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
