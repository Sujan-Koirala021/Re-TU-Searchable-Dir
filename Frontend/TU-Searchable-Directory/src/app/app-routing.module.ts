import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth-guard.service';
import { InfoCardComponent } from './tree/info-card/info-card.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'edit', canActivate: [AuthGuard],component: TreeComponent},
  {path: 'edit/:label', canActivate: [AuthGuard],component: InfoCardComponent},
  {path: 'auth', component: AuthFormComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
