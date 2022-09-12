import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { listUserService } from '../../list-user.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  @Input() data!: any;
  T_Comment!: boolean;
  T_Close!: boolean;
  Comment!: boolean;
  dataComment: any = [];
  constructor(private listUserservice: listUserService) {}

  ngOnInit(): void {
    console.log('data nya haha', this.data);
    this.T_Comment = true;
    this.T_Close = false;
    this.Comment = false;
  }
  ButtonComment() {
    this.getDataCommentUser();
  }
  closeComment() {
    this.T_Comment = true;
    this.T_Close = false;
    this.Comment = false;
  }
  getDataCommentUser() {
    this.listUserservice
      .getComment(this.data.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        console.log('response', response);
        this.dataComment = response;
        console.log('response Komen', this.dataComment);
        this.Comment = true;
        this.T_Comment = false;
        this.T_Close = true;
      });
  }
}
