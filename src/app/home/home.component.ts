import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    console.log('data submit', this.FormPost.status);
    if (this.FormPost.status == 'INVALID') {
      alert('please complete the form');
    } else if (this.FormPost.status == 'VALID') {
      const tmp = {
        id: this.number++,
        form: this.FormPost.value,
      };
      this.dataPost.push(tmp);
    }
  }
  test() {
    const tmp = {
      produk: 'haha',
    };
    this.dataPost.push(tmp);
    console.log('haha', tmp);
  }
  DeletPost(data: any) {
    console.log('delete', data);
    this.dataPost.splice(0, data.id);
  }
}
