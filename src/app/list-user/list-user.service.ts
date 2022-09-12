import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  listUser: () => 'https://jsonplaceholder.typicode.com/users',
  getpostUser: (id: string) =>
    'https://jsonplaceholder.typicode.com/posts?userId=' + id,
  getpostComment: (id: string) =>
    'https://jsonplaceholder.typicode.com/comments?postId=' + id,
  getLibrary: (id: string) =>
    'https://jsonplaceholder.typicode.com/albums?userId=' + id,
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
  getPost(id: any): Observable<string> {
    return this.httpClient.get(routes.getpostUser(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
  getComment(id: any): Observable<string> {
    return this.httpClient.get(routes.getpostComment(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
  getLibrary(id: any): Observable<string> {
    return this.httpClient.get(routes.getLibrary(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
