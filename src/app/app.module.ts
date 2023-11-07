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
