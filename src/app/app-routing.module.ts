import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  Shell.childRoutes([
    {
      path: 'home',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'listUser',
      loadChildren: () =>
        import('./list-user/list-user.module').then((m) => m.ListUserModule),
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
