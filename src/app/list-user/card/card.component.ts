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

  ngOnInit(): void {
    console.log('data nya haha', this.data);
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  DetailUser() {
    console.log('datanya?', this.data);
    this.router.navigate([`listUser/detailUser/${this.data.id}`]);
  }
}
