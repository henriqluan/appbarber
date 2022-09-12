import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RolesPageGuard } from './guard/roles-page.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'home', component: HomeComponent },
 { path: 'dashboard', component: DashboardComponent, canActivate: [RolesPageGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
