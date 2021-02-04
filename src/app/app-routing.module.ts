import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafoliorComponent } from './pages/portafolior/portafolior.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: PortafoliorComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path: '**',  pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
