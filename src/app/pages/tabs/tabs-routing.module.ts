import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
    },
    {
      path: 'take-care', loadChildren: () => import('../take-care/take-care.module').then(m => m.TakeCarePageModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
