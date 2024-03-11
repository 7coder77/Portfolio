import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { BannerComponent } from './public/banner/banner.component';
import { AboutComponent } from './public/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './public/services/services.component';
import { PortfolioComponent } from './public/portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
  ,{
  path:'admin',
  loadChildren: () =>
  import('./admin/admin.module').then(m => m.AdminModule)
}];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
