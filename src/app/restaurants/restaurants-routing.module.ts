import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantsComponent} from './restaurants.component';
import {RestaurantEditComponent} from './restaurant-edit/restaurant-edit.component';
import {AuthGuard} from '../authentication/auth.guard';

const routes: Routes = [
  {path: '',
    component: RestaurantsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':restaurantId/edit', component: RestaurantEditComponent},
      { path: ':restaurantId/products', loadChildren: () => import('./../products/products.module').then(m => m.ProductsModule)},
      { path: ':restaurantId/menus', loadChildren: () => import('./../menus/menus.module').then(m => m.MenusModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
