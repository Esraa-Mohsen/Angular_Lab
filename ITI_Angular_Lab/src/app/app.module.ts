import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './Components/slider/slider.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { StudentsComponent } from './Components/students/students.component';
import { HomeComponent } from './Components/Routing/home/home.component';
import { ProfileComponent } from './Components/Routing/profile/profile.component';
import { Error404Component } from './Components/Routing/error404/error404.component';
import { UserDetailsComponent } from './Components/Routing/user-details/user-details.component';
import { RouterLink } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Components/Routing/header/header.component'


const routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"profile/:id", component:UserDetailsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:Error404Component},
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SliderComponent,
    RegistrationComponent,
    StudentsComponent,
    HomeComponent,
    ProfileComponent,
    Error404Component,
    UserDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
