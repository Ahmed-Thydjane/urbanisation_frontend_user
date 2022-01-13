import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { PlaylistHomeComponent } from './playlist-home/playlist-home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PubComponent } from './pub/pub.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { AddMovieToPlaylistComponent } from './add-movie-to-playlist/add-movie-to-playlist.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { ChoosePlaylistDialogComponent } from './choose-playlist-dialog/choose-playlist-dialog.component';
import { PlayVideoDialogComponent } from './play-video-dialog/play-video-dialog.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SettingsComponent } from './settings/settings.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { AddAdmindialogComponent } from './add-admindialog/add-admindialog.component';
import { SignUpAdvertiserComponent } from './sign-up-advertiser/sign-up-advertiser.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    LoginComponent,
    SearchResultComponent,
    HomeComponent,
    PlaylistHomeComponent,
    PlaylistComponent,
    PubComponent,
    CreatePlaylistComponent,
    AddMovieToPlaylistComponent,
    ChoosePlaylistDialogComponent,
    PlayVideoDialogComponent,
    SignUpComponent,
    SettingsComponent,
    PasswordDialogComponent,
    AddAdmindialogComponent,
    SignUpAdvertiserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatDialogModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatButtonModule,
        CKEditorModule,
        MatSnackBarModule,
        ReactiveFormsModule

    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
