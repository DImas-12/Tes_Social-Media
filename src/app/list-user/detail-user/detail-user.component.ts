import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { listUserService } from '../list-user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnInit {
  dataPost: any = [];
  id: any;
  Post!: boolean;

  constructor(
    private listUserservice: listUserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Post = false;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('actived route', this.id);
    this.getDataPostUser();
  }
  post() {
    this.Post = true;
  }
  getDataPostUser() {
    this.listUserservice
      .getPost(this.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        console.log('response', response);
        this.dataPost = response;
        console.log('response haha', this.dataPost);
      });
  }
}
