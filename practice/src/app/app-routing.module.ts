import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
    .then(mod => mod.AdminModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module')
    .then(mod => mod.UserModule)
  },
  {
    path: 'home',component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path: 'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
