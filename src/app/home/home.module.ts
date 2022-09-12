import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, EditCommentComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
