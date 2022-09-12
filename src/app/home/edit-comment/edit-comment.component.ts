import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss'],
})
export class EditCommentComponent implements OnInit {
  @Input() data!: any;
  formcomment!: boolean;
  Editcomment!: boolean;
  EditFormComment!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    console.log('data nya haha', this.data);
    this.formcomment = true;
    this.FormGroup();
  }

  editComment(data: any) {
    console.log('hjhj', data);
    this.EditFormComment.setValue(this.data);

    this.formcomment = false;
    this.Editcomment = true;
  }
  SubmitEditComment() {
    this.data = this.EditFormComment.value;
    this.formcomment = true;
    this.Editcomment = false;
  }
  FormGroup() {
    this.EditFormComment = new FormGroup({
      comment: new FormControl(null, [Validators.required]),
    });
  }
}
