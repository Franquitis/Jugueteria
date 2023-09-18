import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { CuerpoComponent } from './paginas/cuerpo/cuerpo.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { PieComponent } from './paginas/pie/pie.component';

const routes: Routes = [
  {
  path:"",component:CuerpoComponent
  },
  {
    path:"inicio",component:CuerpoComponent
  },
  {
    path:"galeria",component:GaleriaComponent
  },
  {
    path:"acerca",component:AcercaComponent
  },
  {
    path:"contacto",component:FooterComponent
  },
  {
    path:"**",component:PieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
