import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please complete the form',
      });
    } else if (this.FormComment.status == 'VALID') {
      const tmp = {
        id: this.number++,
        form: this.FormComment.value,
      };

      this.dataComment.push(tmp);
      Swal.fire('Saved!', '', 'success');
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
    Swal.fire('Saved!', '', 'success');
  }

  Deletcomment(data: any) {
    this.dataComment.splice(0, data.id);
    Swal.fire('Saved!', '', 'success');
  }
  DeletePost() {
    this.onDelete.emit(this.data);
  }
}
