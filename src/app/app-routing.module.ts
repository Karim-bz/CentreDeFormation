import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchTrainingComponent } from './search-training/search-training.component';
import { LoginComponent } from './modules/authentification/login/login.component';
import { RegisterComponent } from './modules/authentification/register/register.component';
import { AddTrainingComponent } from './trainings/add-training/add-training.component';

const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'searchTraining', component: SearchTrainingComponent },
  { path:'addTraining', component: AddTrainingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
