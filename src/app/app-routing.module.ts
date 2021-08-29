import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/profile/profile.component'
import { RepositoriesComponent } from 'src/app/repositories/repositories.component'
import { NotFoundComponent } from 'src/app/not-found/not-found.component'


const routes: Routes = [
  {path: 'profiles', component: ProfileComponent},
  {path: 'repositories', component: RepositoriesComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }