import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [{ path: '', component: NavbarComponent },{
  path: 'home',
  loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
},{
  path: 'contact',
  loadChildren: () => import('../contact/contact/contact.module').then((m) => m.ContactModule),
},
{
  path: 'prayer',
  loadChildren:() => import('../prayer/prayer.module').then((m) =>m.PrayerModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
