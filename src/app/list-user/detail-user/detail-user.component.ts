import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';
import { listUserService } from '../list-user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnInit {
  dataPost: any = [];
  dataLibrary: any = [];
  id: any;
  Post!: boolean;
  Library!: boolean;

  constructor(
    private listUserservice: listUserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Post = false;
    this.Library = false;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
  post() {
    this.getDataPostUser();
  }
  library() {
    this.getLibraryUser();
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
        this.dataPost = response;

        this.Library = false;
        this.Post = true;
        Swal.fire('Saved!', '', 'success');
      });
  }
  getLibraryUser() {
    this.listUserservice
      .getLibrary(this.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        this.dataLibrary = response;

        this.Library = true;
        this.Post = false;
        Swal.fire('Saved!', '', 'success');
      });
  }
}
