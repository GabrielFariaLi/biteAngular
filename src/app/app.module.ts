import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriasCTAComponent } from './components/categorias-cta/categorias-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { CartComponent } from './pages/cart/cart.component';
import { MatMenuModule } from '@angular/material/menu';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { OrdersComponent } from './pages/kitchen/dialogs/orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    BannerComponent,
    NavbarComponent,
    HeroComponent,
    CategoriasCTAComponent,
    FooterComponent,
    CardapioComponent,
    CartComponent,
    MyOrdersComponent,
    KitchenComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatChipsModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
