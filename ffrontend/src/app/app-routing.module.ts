import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {PlaylistHomeComponent} from "./playlist-home/playlist-home.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SettingsComponent} from "./settings/settings.component";
import {AdvertiserHomeComponent} from "./advertiser-home/advertiser-home.component";
import {SignUpAdvertiserComponent} from "./sign-up-advertiser/sign-up-advertiser.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [


      { path: 'login', component: LoginComponent },
      {path:'search', component: SearchComponent },
      {path:'search-result', component: SearchResultComponent },
      { path: 'home', component:HomeComponent  },
      { path: 'playlist_home', component:PlaylistHomeComponent  },
      { path: 'playlist', component:PlaylistComponent  },
      { path: 'sign_up', component:SignUpComponent  },
      {path:'setting',component:SettingsComponent},
      {path:'advertiser-home',component:AdvertiserHomeComponent},
      {path:'sign-up-advertiser',component:SignUpAdvertiserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
