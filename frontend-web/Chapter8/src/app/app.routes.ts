import { Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AboutComponent} from "./core/about/about.component";
import {ContactComponent} from "./core/contact/contact.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent },    // wildcard route for 404
];
