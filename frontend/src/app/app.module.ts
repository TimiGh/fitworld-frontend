import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AppComponent } from './app.component';

import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppBlogComponent } from './components/app-blog/app-blog.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSlideComponent } from './components/app-slide/app-slide.component';
import { AppArticlesComponent } from './components/app-articles/app-articles.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {GlobalService} from './components/global-service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: AppHomeComponent },
  { path: 'blog', component: AppBlogComponent },
  { path: 'contact', component: AppContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppHomeComponent,
    AppBlogComponent,
    AppContactComponent,
    AppFooterComponent,
    AppSlideComponent,
    AppArticlesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
