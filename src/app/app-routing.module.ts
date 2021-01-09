import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchTrainingComponent } from './search-training/search-training.component';
import { LoginComponent } from './modules/authentification/login/login.component';

const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'login', component: LoginComponent },
  { path:'searchTraining', component: SearchTrainingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
