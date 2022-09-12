import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { listUserService } from '../../list-user.service';

@Component({
  selector: 'app-library-image',
  templateUrl: './library-image.component.html',
  styleUrls: ['./library-image.component.scss'],
})
export class LibraryImageComponent implements OnInit {
  dataImage: any = [];
  id: any;
  constructor(
    private listUserservice: listUserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getLibraryUser();
  }
  getLibraryUser() {
    this.listUserservice
      .getImage(this.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        console.log('response image', response);
        this.dataImage = response;
        console.log('response haha image', this.dataImage);
      });
  }
}
