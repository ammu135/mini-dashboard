import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTableComponent } from './dashboard/dashboard-table/dashboard-table.component';
import { DashboardInfoComponent } from './dashboard/dashboard-info/dashboard-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'table',
        component: DashboardTableComponent,
        data: { animation: 'Table' }
      },
      {
        path: 'info',
        component: DashboardInfoComponent,
        data: { animation: 'Info' }
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


