import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/profile/profile.component'
import { RepositoriesComponent } from 'src/app/repositories/repositories.component'
//import { NotFoundComponent } from 'src/app/not-found/not-found.component'
// import { GithubComponent } from './github/github.component';


const routes: Routes = [
  {path: 'profiles', component: ProfileComponent},
  {path: 'repositories', component: RepositoriesComponent},
  //{path: '**', component: NotFoundComponent},
  {path: '',  pathMatch:'prefix', redirectTo:'/profiles'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }