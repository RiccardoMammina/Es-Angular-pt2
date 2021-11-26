import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserContainerComponent } from './components/user/user-container/user-container.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserSingleComponent } from './components/user/user-single/user-single.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { OrderContainerComponent } from './components/order/order-container/order-container.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderSingleComponent } from './components/order/order-single/order-single.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
