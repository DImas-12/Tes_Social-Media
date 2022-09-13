import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss'],
})
export class EditCommentComponent implements OnInit {
  @Input() data!: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  formcomment!: boolean;
  Editcomment!: boolean;
  EditFormComment!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.formcomment = true;
    this.FormGroup();
  }

  editComment(data: any) {
    this.EditFormComment.setValue(this.data.form);

    this.formcomment = false;
    this.Editcomment = true;
  }
  SubmitEditComment() {
    const tmp = {
      id: this.data.id,
      form: this.EditFormComment.value,
    };
    this.data = tmp;
    this.formcomment = true;
    this.Editcomment = false;
    Swal.fire('Saved!', '', 'success');
  }
  FormGroup() {
    this.EditFormComment = new FormGroup({
      comment: new FormControl(null, [Validators.required]),
    });
  }
  Delete() {
    this.onDelete.emit(this.data);
  }
}
