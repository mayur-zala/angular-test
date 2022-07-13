import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '@app/utils/guards/route.guard';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [      
      {
        path: 'dashboard',
        canActivate: [RouteGuard],
        component: DashboardComponent
      },
      {
        path: 'add',
        canActivate: [RouteGuard],
        component: AddEditComponent
      },
      {
        path: 'edit/:id',
        canActivate: [RouteGuard],
        component: AddEditComponent
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
