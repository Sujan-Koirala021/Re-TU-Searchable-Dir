import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { DataService } from './services/data.service';
import { InfoCardComponent } from './tree/info-card/info-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonComponent } from './button/button.component';

import { DropdownDirective } from './directives/app-dropdown.directive';
import { AuthGuard } from './services/auth-guard.service';
import { DisplayCardComponent } from './display-card/display-card.component';
import { TestComponent } from './test/test.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { DirectAuthenticationComponent } from './direct-authentication/direct-authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    InfoCardComponent,
    NavBarComponent,
    AuthFormComponent,
    SearchComponent,
    HeaderComponent,
    DropdownComponent,
    ButtonComponent,
    DropdownDirective,
    DisplayCardComponent,
    TestComponent,
    HomePageComponent
    // DirectAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
