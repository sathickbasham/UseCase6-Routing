import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
