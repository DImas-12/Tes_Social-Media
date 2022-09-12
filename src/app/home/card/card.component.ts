import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data!: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  EditFormPost!: FormGroup;
  EditFormComment!: FormGroup;
  FormComment!: FormGroup;

  DataPost!: boolean;
  EditPost!: boolean;

  Comment!: boolean;

  DataComment!: boolean;
  EditComment!: boolean;
  T_Comment!: boolean;
  T_Close!: boolean;

  dataComment: any = [];
  constructor() {}

  ngOnInit(): void {
    console.log('data nya haha', this.data);
    this.FormGroup();
    this.Comment = false;
    this.T_Comment = true;
    this.T_Close = false;
    this.DataPost = true;
  }

  FormGroup() {
    this.EditFormPost = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, Validators.required),
    });
    this.FormComment = new FormGroup({
      comment: new FormControl(null, [Validators.required]),
    });
    this.EditFormComment = new FormGroup({
      comment: new FormControl(null, [Validators.required]),
    });
  }
  number = 0;
  Submit() {
    if (this.FormComment.status == 'INVALID') {
      alert('please complete the Comment form');
    } else if (this.FormComment.status == 'VALID') {
      const tmp = {
        id: this.number++,
        form: this.FormComment.value,
      };

      this.dataComment.push(tmp);
    }
  }
  openComment() {
    this.Comment = true;
    this.T_Comment = false;
    this.T_Close = true;
  }
  closeComment() {
    this.Comment = false;
    this.T_Comment = true;
    this.T_Close = false;
  }

  editPost() {
    console.log('hjhj');

    this.EditFormPost.setValue(this.data.form);
    this.DataPost = false;
    this.EditPost = true;
  }
  SubmitEdit() {
    const tmp = {
      id: this.data.id,
      form: this.EditFormPost.value,
    };
    this.data = tmp;
    this.DataPost = true;
    this.EditPost = false;
  }

  Deletcomment(data: any) {
    console.log('delete', data);
    this.dataComment.splice(0, data.id);
  }
  DeletePost() {
    this.onDelete.emit(this.data);
  }
}
