import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { CreatePlayerComponent } from './create-player/create-player.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'register', component:RegisterComponent
  },
  {
    path: 'player-detail', component:PlayerDetailComponent
  },
  {
    path: 'edit-player', component:EditPlayerComponent
  },
  
  {
    path: 'create-player', component:CreatePlayerComponent
  },
  {
    path: 'players', component:PlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
