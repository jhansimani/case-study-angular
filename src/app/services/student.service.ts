import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap, throwError } from 'rxjs';
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}
  url = 'assets/db.json';

  getStudents() {
    return this.httpClient
      .get<Student[]>(this.url)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(
        `An error occurred: Please connect db to server : run below command npm run mock:server`
      );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () =>
        new Error(
          'Something bad happened; please try to connect to db server by using following command : npm run mock:server '
        )
    );
  }
}
