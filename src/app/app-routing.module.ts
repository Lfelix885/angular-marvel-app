import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { InfoPersonagemComponent } from './info-personagem/info-personagem.component'


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'info-personagem',
    component: InfoPersonagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
