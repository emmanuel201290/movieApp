import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list-page/list.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
   path: '',
   component: LayoutPageComponent,

   children: [
    {
      path: 'search',
      component: ListComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: ':id',
      component: DetailsComponent
    },
    {
      path: '**',
      redirectTo: 'search'
     }
   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
