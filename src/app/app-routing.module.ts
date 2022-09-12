import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesPageGuard } from './pages/guard/roles-page.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'master', component: MasterComponent,
    canActivate: [RolesPageGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
