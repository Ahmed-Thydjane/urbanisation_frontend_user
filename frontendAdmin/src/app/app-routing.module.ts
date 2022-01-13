import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminUserComponent} from "./admin-user/admin-user.component";
import {AdminAdsComponent} from "./admin-ads/admin-ads.component";

const routes: Routes = [
  {path:'adminuser',component:AdminUserComponent},
  {path:'adminads',component:AdminAdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
