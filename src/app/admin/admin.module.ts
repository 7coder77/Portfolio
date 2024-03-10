import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from '@app/shared/guard/auth.guard';

const route: Routes = [
  {
    path: '',
    // component: AdminHomeComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: AdminHomeComponent,canActivate: [AuthGuard] },
    ],
  },
];
@NgModule({
  declarations: [LoginComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatIconModule
  ],
})
export class AdminModule {}
