import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent  implements OnInit{
  course!:Course;
  constructor(private service:CourseService){}
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }

}
