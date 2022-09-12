import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listUserService } from '../../list-user.service';

@Component({
  selector: 'app-card-library',
  templateUrl: './card-library.component.html',
  styleUrls: ['./card-library.component.scss'],
})
export class CardLibraryComponent implements OnInit {
  @Input() data!: any;
  constructor(
    private router: Router,
    private listUserservice: listUserService
  ) {}

  ngOnInit(): void {
    console.log('data nya haha', this.data);
  }
  DetailImage() {
    this.router.navigate([`listUser/detailUser/library/image/${this.data.id}`]);
  }
}
