import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginMainComponent } from './post-login-main/post-login-main.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guard/auth.guard';
import { HomeComponent } from './home/home.component';

const route: Routes = [
  {
    path: '',
    component: PostLoginMainComponent,
    children: [
      {path:'', redirectTo:'home', pathMatch: 'full'},
      {path:'home',component:HomeComponent}
    ],
  },
];

@NgModule({
  declarations: [
    PostLoginMainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class PostLoginModule { }
