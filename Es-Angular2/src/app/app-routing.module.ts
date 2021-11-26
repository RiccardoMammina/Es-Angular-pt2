import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderContainerComponent } from './components/order/order-container/order-container.component';
import { UserContainerComponent } from './components/user/user-container/user-container.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path:'users',
    component: UserContainerComponent
  },
  {
    path:'orders',
    component: OrderContainerComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
