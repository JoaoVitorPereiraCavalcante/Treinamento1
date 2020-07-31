
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DISCComponent } from './perfil-disc/perfil-disc.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil-disc', component: DISCComponent},
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'hobbies', component: HobbiesComponent }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)