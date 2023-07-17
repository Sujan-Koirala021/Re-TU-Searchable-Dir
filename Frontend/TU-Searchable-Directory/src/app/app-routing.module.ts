import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth-guard.service';
import { InfoCardComponent } from './tree/info-card/info-card.component';
import { TreeComponent } from './tree/tree.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
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
