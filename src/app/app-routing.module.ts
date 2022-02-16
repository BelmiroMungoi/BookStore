import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'clienteAdd', component: ClienteAddComponent},
  { path: 'clienteAdd/:id', component: ClienteAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
