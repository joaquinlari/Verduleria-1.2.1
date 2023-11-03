import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FrutasComponent } from './frutas/frutas.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'frutas', component: FrutasComponent},
  { path: 'verduras', component: VerdurasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'carrito', component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
