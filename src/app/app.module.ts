import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { ApiService } from './api.service'
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
//import { NotFoundComponent } from './not-found/not-found.component';
// import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    ProfileComponent,
    RepositoriesComponent,
    //NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
