import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data!: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  DetailUser() {
    this.router.navigate([`listUser/detailUser/${this.data.id}`]);
  }
}
