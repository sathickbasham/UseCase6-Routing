import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'products',
    loadChildren:()=> import ('./products/products.module').then(m=>m.ProductsModule),
    data: { preload: true }
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canLoad:[AuthGuard]
  },
{
path:'login',
component:LoginComponent
},
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'',
    redirectTo:'/about-us',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
