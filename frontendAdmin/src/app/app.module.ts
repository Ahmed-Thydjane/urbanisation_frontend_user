import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminAdvertiserComponent } from './admin-advertiser/admin-advertiser.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminAdsComponent } from './admin-ads/admin-ads.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { AdAdminDialogComponent } from './ad-admin-dialog/ad-admin-dialog.component';
import {LoginComponent} from "./login/login.component";





@NgModule({
  declarations: [
    AppComponent,
    AdminUserComponent,
    AdminAdvertiserComponent,
    NavbarComponent,
    AdminAdsComponent,
    AdAdminDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
