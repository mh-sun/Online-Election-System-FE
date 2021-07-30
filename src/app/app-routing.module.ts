import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { VoterLoginComponent } from './components/voter-login/voter-login.component';
import { VoterComponent } from './components/voter/voter.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',component:WelcomePageComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'voter/login',component:VoterLoginComponent},
  {path:'user/admin',component:AdminComponent},
  {path:'user/voter',component:VoterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
