import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user.component';
import { listUserRoutingModule } from './list-user-routing.module';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListUserComponent, CardComponent],
  imports: [CommonModule, SharedModule, listUserRoutingModule],
})
export class ListUserModule {}
