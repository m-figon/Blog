import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AddComponent } from './add/add.component';
import { ChoiceComponent } from './choice/choice.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { AppService } from './app.service';
import { PostComponent } from './choice/post/post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "choice", component: ChoiceComponent
  },
  {
    path: "add", component: AddComponent
  },
  {
    path: "post/:id", component: DetailsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AddComponent,
    ChoiceComponent,
    HomeComponent,
    DetailsComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
