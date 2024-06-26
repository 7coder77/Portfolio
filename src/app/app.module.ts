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
import { DynamicDataComponent } from './public/dynamic-data/dynamic-data.component';
import { ContactComponent } from './public/contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ExperiencePublicComponent } from './public/experience-public/experience-public.component';
import { MatIconModule } from '@angular/material/icon';

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
    DynamicDataComponent,
    ContactComponent,
    ExperiencePublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
