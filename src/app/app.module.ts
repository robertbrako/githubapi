import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GitHubComponent } from './components/github/github.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GHService } from './services/github.service';

const appRoutes: Routes = [
{path: '', component:GitHubComponent},
{path: 'users', component:UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GitHubComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ GHService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
