import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import {AuthService} from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'products',
        component:ManageProductsComponent
      },
      {
        path:'',
        component:AdminDashboardComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
