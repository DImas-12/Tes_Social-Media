import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { listUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  listUser: any = [];
  constructor(private listUserservice: listUserService) {}

  ngOnInit(): void {
    this.getDataUser();
  }
  getDataUser() {
    this.listUserservice
      .getUser()
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        console.log('response', response);
        this.listUser = response;
        console.log('response haha', this.listUser);
      });
  }
}
