import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { SnackComponent } from './snack/Snack.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'snacks', component: SnackComponent },
  { path: 'home', component: HeroComponent },
  { path: 'mycommands', component: OrderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to 'home'
  { path: '**', component: HeroComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
