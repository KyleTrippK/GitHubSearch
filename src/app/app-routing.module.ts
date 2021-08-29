import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/profile/profile.component'
import { RepositoriesComponent } from 'src/app/repositories/repositories.component'

const routes: Routes = [
  {path: 'profiles', component: ProfileComponent},
  {path: 'repositories', component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }