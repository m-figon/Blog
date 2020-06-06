import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent} from './add/add.component';
import { ChoiceComponent} from './choice/choice.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
