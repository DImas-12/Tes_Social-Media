import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { LibraryImageComponent } from './detail-user/library-image/library-image.component';
import { ListUserComponent } from './list-user.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: ListUserComponent },
  { path: 'detailUser/:id', component: DetailUserComponent },
  { path: 'detailUser/library/image/:id', component: LibraryImageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class listUserRoutingModule {}
