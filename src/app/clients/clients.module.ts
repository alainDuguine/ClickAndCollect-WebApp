import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsComponent} from './clients.component';
import {ClientsRoutingModule} from './clients-routing.module';
import {ClientGeosearchComponent} from './client-geosearch/client-geosearch.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ClientHeaderComponent} from './client-header/client-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RestaurantResultComponent} from './client-geosearch/restaurant-result/restaurant-result.component';
import {ClientOrderComponent} from './client-order/client-order.component';
import {ShoppingCartComponent} from './client-order/shopping-cart/shopping-cart.component';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientGeosearchComponent,
    ClientHeaderComponent,
    RestaurantResultComponent,
    ClientOrderComponent,
    ShoppingCartComponent
  ],
  exports: [
    ClientHeaderComponent
  ],
  imports: [
    ClientsRoutingModule,
    CommonModule,
    AutocompleteLibModule,
    FontAwesomeModule,
    FormsModule,
    NgbPopoverModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
