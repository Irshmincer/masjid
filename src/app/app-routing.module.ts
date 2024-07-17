import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'contact',
  //   loadChildren: () =>
  //     import('./contact/contact/contact.module').then((m) => m.ContactModule),
  // },
  {
    path: 'navbar',
    loadChildren: () =>
      import('./navbar/navbar.module').then((m) => m.NavbarModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },{
    path:'', redirectTo:'home', pathMatch:'full'
  },
  { path: 'prayer', loadChildren: () => import('./prayer/prayer.module').then(m => m.PrayerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
