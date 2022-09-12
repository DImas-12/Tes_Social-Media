import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-library',
  templateUrl: './card-library.component.html',
  styleUrls: ['./card-library.component.scss'],
})
export class CardLibraryComponent implements OnInit {
  @Input() data!: any;
  constructor() {}

  ngOnInit(): void {
    console.log('data nya haha', this.data);
  }
}
