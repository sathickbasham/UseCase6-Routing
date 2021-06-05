import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AdminModule} from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component'
import {AuthRoutingModule} from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    
    ServicesComponent,
    ContactUsComponent,
    PagenotfoundComponent,
    
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
