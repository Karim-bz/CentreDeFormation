import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SearchTrainingComponent } from './search-training/search-training.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './modules/authentification/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/authentification/register/register.component';
import { AddTrainingComponent } from './trainings/add-training/add-training.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EditTrainingComponent } from './trainings/edit-training/edit-training.component';
import { ListTrainingsComponent } from './trainings/list-trainings/list-trainings.component';
import { DetailTrainingComponent } from './trainings/detail-training/detail-training.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchTrainingComponent,
    LoginComponent,
    RegisterComponent,
    AddTrainingComponent,
    EditTrainingComponent,
    ListTrainingsComponent,
    DetailTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
