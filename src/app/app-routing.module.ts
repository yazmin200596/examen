import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'sidenav', component:  SidenavComponent, canActivate: [AuthGuard] },
  {path:'sidenav',component:MatSidenav, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
