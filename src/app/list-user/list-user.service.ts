import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  listUser: () => 'https://jsonplaceholder.typicode.com/users',
};

@Injectable({
  providedIn: 'root',
})
export class listUserService {
  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<string> {
    return this.httpClient.get(routes.listUser()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
