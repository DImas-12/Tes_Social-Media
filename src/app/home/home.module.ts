import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { HeadNavComponent } from './head-nav/head-nav.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, HeadNavComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
