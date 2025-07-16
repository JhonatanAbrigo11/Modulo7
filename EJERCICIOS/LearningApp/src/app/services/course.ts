import { Injectable, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { studentData } from '../data/student.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService  {
  private course:Course= studentData;
  getCourse():Course {
    return this.course;
  }
}
