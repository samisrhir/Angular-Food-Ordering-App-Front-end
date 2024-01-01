import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SnackComponent } from './snack/Snack.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { FilterByCategoryPipe } from './snack/filter-by-category.pipe';


@NgModule({
  declarations: [
    FilterByCategoryPipe,
    AppComponent,
    HeroComponent,
    SnackComponent,
    NavbarComponent,OrderComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





