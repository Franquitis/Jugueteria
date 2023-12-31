import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './paginas/head/head.component';
import { CuerpoComponent } from './paginas/cuerpo/cuerpo.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { PieComponent } from './paginas/pie/pie.component';
import { ListaproductosComponent } from './paginas/listaproductos/listaproductos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    CuerpoComponent,
    FooterComponent,
    GaleriaComponent,
    AcercaComponent,
    PieComponent,
    ListaproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
