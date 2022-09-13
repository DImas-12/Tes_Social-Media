import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataPost: any = [];
  FormPost!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.FormGroup();
  }

  FormGroup() {
    this.FormPost = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, Validators.required),
    });
  }
  number = 0;
  Submit() {
    if (this.FormPost.status == 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please complete the form',
      });
    } else if (this.FormPost.status == 'VALID') {
      const tmp = {
        id: this.number++,
        form: this.FormPost.value,
      };
      this.dataPost.push(tmp);
      Swal.fire('Saved!', '', 'success');
    }
  }

  DeletPost(data: any) {
    this.dataPost.splice(0, data.id);
    Swal.fire('Saved!', '', 'success');
  }
}
