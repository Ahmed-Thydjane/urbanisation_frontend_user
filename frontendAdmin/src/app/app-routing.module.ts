import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminUserComponent} from "./admin-user/admin-user.component";
import {AdminAdsComponent} from "./admin-ads/admin-ads.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children:[
      {path:'adminuser',component:AdminUserComponent},
      {path:'adminads',component:AdminAdsComponent},

    ]
  },{path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
