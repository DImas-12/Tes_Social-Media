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
  Submit() {
    console.log('data submit', this.FormPost.status);
    if (this.FormPost.status == 'INVALID') {
      alert('please complete the form');
    } else if (this.FormPost.status == 'VALID') {
      this.dataPost.push(this.FormPost.value);
    }
  }
  test() {
    const tmp = {
      produk: 'haha',
    };
    this.dataPost.push(tmp);
    console.log('haha', tmp);
  }
}
