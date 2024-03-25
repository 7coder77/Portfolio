import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginMainComponent } from './post-login-main/post-login-main.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AddCompComponent } from './add-comp/add-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { NotificationComponent } from './notification/notification.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ExperienceComponent } from './experience/experience.component';
import {MatStepperModule} from '@angular/material/stepper';

const route: Routes = [
  {
    path: '',
    component: PostLoginMainComponent,
    children: [
      {path:'', redirectTo:'home', pathMatch: 'full'},
      {path:'home',component:HomeComponent},
      {path:'add',component:AddCompComponent},
      {path:'notification',component:NotificationComponent},
      {path:'exp',component:ExperienceComponent},
    ],
  },
];

@NgModule({
  declarations: [
    PostLoginMainComponent,
    HomeComponent,
    AddCompComponent,
    NotificationComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule
  ]
})
export class PostLoginModule { }
