import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AgentsSearchResultComponent } from './pages/agents-search-result/agents-search-result.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'reiseexperten',
    component: AgentsSearchResultComponent,
  },
  { 
    path: 'imprint', 
    component: ImprintComponent 
  },
  { 
    path: 'datenschutz', 
    component: DatenschutzComponent 
  },
  {
    path: 'agent/:agentUuid',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
