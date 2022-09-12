import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user.component';
import { listUserRoutingModule } from './list-user-routing.module';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { CardDetailComponent } from './detail-user/card-detail/card-detail.component';
import { CardLibraryComponent } from './detail-user/card-library/card-library.component';
import { LibraryImageComponent } from './detail-user/library-image/library-image.component';
import { ImageCardComponent } from './detail-user/image-card/image-card.component';

@NgModule({
  declarations: [ListUserComponent, CardComponent, DetailUserComponent, CardDetailComponent, CardLibraryComponent, LibraryImageComponent, ImageCardComponent],
  imports: [CommonModule, SharedModule, listUserRoutingModule],
})
export class ListUserModule {}
