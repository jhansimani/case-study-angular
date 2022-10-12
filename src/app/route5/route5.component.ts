import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css'],
  providers: [StudentService],
})
export class Route5Component implements OnInit {
  studentList: Student[] = [];
  keys: any[] = [];
  clikedKeys: any[] = [];
  duplicatedData: Student[] = [];
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (res) => {
        this.duplicatedData = res;
        this.studentList = res;
        this.obtainingKeys(this.studentList);
      },
      (error) => {
        console.log(error);
        alert(error);
      }
    );
  }

  obtainingKeys(studentList: any) {
    for (const student of studentList) {
      for (const key in student) {
        if (student.hasOwnProperty(key)) {
          if (!this.keys.includes(key)) {
            this.keys.push(key);
            this.clikedKeys.push({ [key]: 0 });
          }
        }
      }
    }
  }
  click = 0;
  operation(key: any) {
    this.click = this.click + 1;
    this.clikedKeys.map((element) => {
      for (const key2 of Object.keys(element)) {
        if (key2 === key) {
          element[key] = element[key] + 1;
          if (element[key] === 1) {
            this.ascendingOrder(key);
          } else if (element[key] === 2) {
            this.descendingOrder(key);
          } else if (element[key] === 3) {
            this.studentList = this.duplicatedData;
            this.resetData();
            element[key] = 0;
          }
        }
      }
    });
  }
  ascendingOrder(key: string) {
    this.studentList.sort((a: any, b: any) => {
      if (typeof a[key] === 'number') {
        if (a[key] === b[key]) {
          return a['section'] < b['section'] ? -1 : 1;
        }
        return a[key] - b[key];
      } else {
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        if (a[key] === b[key]) {
          return a['section'] < b['section'] ? -1 : 1;
        }
        // names must be equal
        return 0;
      }
    });
  }
  descendingOrder(key: string) {
    this.studentList.sort((a: any, b: any) => {
      if (typeof a[key] === 'number') {
        return b[key] - a[key];
      } else {
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
        // names must be equal
      }
    });
  }
  resetData() {
    this.studentService.getStudents().subscribe((res) => {
      this.studentList = res;
    });
  }
}
