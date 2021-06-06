import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
import {ContactComponent} from './component/contact/contact.component';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
