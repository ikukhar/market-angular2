import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './routes';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    RootComponent,
    ProductsComponent,
    NavbarComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
